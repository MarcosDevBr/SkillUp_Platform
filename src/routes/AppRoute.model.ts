export default class paths {
  static root = '/';

  static redirect = '/redirecionar';

  static home = {
      root: '/home',

      catalog: {
          root: '/home/catalog',
      },

      profile: {
        root: '/home/profile',
      },

      videoPlayer: {
          root: '/home/videoPlayer',
          campain: '/home/videoPlayer/:IdVideo?',
          goTo: (IdVideo?: string | number) => `/home/videoPlayer${IdVideo ? `/${IdVideo}` : ''}`,
      },

    }
}