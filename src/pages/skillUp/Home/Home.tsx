
import { useState } from 'react';
import HomeView from './Home.view';
import { useMatch, useNavigate } from 'react-router-dom';
import paths from '../../../routes/paths';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { toast } from 'sonner';

export default function Home() {
    const navigate = useNavigate()
    const matchHome = useMatch(paths.home.root);
    const matchProfile = useMatch(paths.home.profile.root);

    const [isLoading] = useState(false)

    const siderData = [
        {
          name: "Home",
          isSelect: !!matchHome ,
          iconType: faHome,
          onClick: () => { 
            navigate(paths.home.root)
          },
        },
        {
          name: "Perfil",
          isSelect: !!matchProfile,
          iconType: faUser,
          onClick: () => { 
            navigate(paths.home.profile.root)
           },
        },
      ]

      const goToProfileScreen = () => {
        navigate(paths.home.profile.root)
      }

      const onclickHelp = () => {
        toast.warning('Ops, Em desenvolvimento');
      }

    return (
        <HomeView 
            isLoading={isLoading} 
            siderData={siderData}
            onClickProfile={goToProfileScreen}
            onclickHelp={onclickHelp}
        />
    )
}
