import { useState, useEffect } from 'react';
import CatalogView from './Catalog.view';
import axios from 'axios';
import { GOOGLE_API_CONFIG, YOUTUBE_API_CONFIG } from '../../../config';

export default function Catalog() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');
    if (authCode) {
      handleCallback(authCode);
    }
  }, []);

  const getAuthUrl = () => {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: GOOGLE_API_CONFIG.CLIENT_ID,
      redirect_uri: GOOGLE_API_CONFIG.REDIRECT_URIS[0],
      scope: 'https://www.googleapis.com/auth/youtube.readonly',
      access_type: 'online'
    });

    return `${GOOGLE_API_CONFIG.AUTH_URI}?${params.toString()}`;
  };

  const getAccessToken = async (authCode: string) => {
    const params = new URLSearchParams({
      code: authCode,
      client_id: GOOGLE_API_CONFIG.CLIENT_ID,
      client_secret: GOOGLE_API_CONFIG.CLIENT_SECRET,
      redirect_uri: GOOGLE_API_CONFIG.REDIRECT_URIS[0],
      grant_type: 'authorization_code'
    });

    const response = await axios.post(GOOGLE_API_CONFIG.TOKEN_URI, params);
    return response.data.access_token;
  };

  const handleCallback = async (authCode: string) => {
    try {
      setLoading(true);
      const accessToken = await getAccessToken(authCode);
      const videos = await fetchVideos(accessToken);
      setVideos(videos);
    } catch (error) {
      console.error('Erro ao obter vídeos', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async (accessToken: string) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          channelId: YOUTUBE_API_CONFIG.CHANNEL_ID,
          maxResults: 5,
          access_token: accessToken
        }
      });
      return response.data.items;
    } catch (error) {
      console.error('Erro ao buscar vídeos do YouTube', error);
      throw error;
    }
  };

  const handleAuth = () => {
    window.location.href = getAuthUrl();
  };

  const handleFilterClick = () => { };
  const onFilterByDate = () => { };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <CatalogView
          isLoading={loading}
          arrFilters={[]}
          data={videos}
          onFilterClick={handleFilterClick}
          onFilterByDate={onFilterByDate}
        />
      )}
      {!videos.length && !loading && (
        <button onClick={handleAuth}>Login with Google to fetch videos</button>
      )}
    </div>
  );
}
