import { useContext } from 'react';
import { AppGlobalContext } from '../../../AppGlobalContextProvider';
import ProfileView from './Profile.view';
import { useNavigate } from 'react-router-dom';
import paths from '../../../routes/paths';

export default function Profile() {
    const navigate = useNavigate()

    const { arrLastVideos, userAccontObj } = useContext(AppGlobalContext);

    const onDeleteProfile = () => {
        //TODO limpar dados do usuário do storage
        navigate(paths.root, { replace: true });    
    }

    return (
        <ProfileView 
            arrLastVideos={arrLastVideos.value || []}
            user={userAccontObj}
            profileTitle="Continue de onde parou"
            onDeleteProfile={onDeleteProfile}
        />
    )
}
