import Search from "../Search/CustonSearch";
import { Container } from "./CustonHeader.style";
import { SkillUpLogo, ProfileTestImg } from "../../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { ICustonHeaderViewProps } from "./CustonHeader.model";

export default function CustonHeaderView({ onClickProfile }: ICustonHeaderViewProps ) {

    return (
        <Container className="header-action-container">

            <div className="header-logo">
                <img 
                    src={SkillUpLogo} 
                    className="search-suffix-img" 
                    alt="Icon"
                />
            </div>

            <div className="header-search">
                <Search  />
            </div>

            <div className="header-profile">
                <div className="header-profile-icon">
                    <div className="header-profile-icon-notifications">
                        <span>
                            9+
                        </span>
                    </div>

                    <FontAwesomeIcon
                        icon={faBell} 
                        size="lg" 
                        className="search-suffix-close-icon" 
                        color="white"
                    />

                </div>

                <div className="header-profile-avatar" onClick={onClickProfile}>
                    <img 
                        src={ProfileTestImg} 
                        className="search-suffix-img" 
                        alt="Icon"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                          }} 
                    />
                </div>
            </div>

        </Container>
    )
}
