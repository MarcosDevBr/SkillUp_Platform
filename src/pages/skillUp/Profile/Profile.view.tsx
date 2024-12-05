import { Popconfirm, Tooltip } from "antd";
import { ProfileTestImg } from "../../../assets";
import VideoCard from "../../../components/composites/VideoCard/VideoCard";
import { IProfileViewProps } from "./Profile.model";
import { Container } from "./Profile.style";

export default function ProfileView({
  arrLastVideos,
  profileTitle,
  user,
  onDeleteProfile
}: IProfileViewProps) {
    return (
        <Container className="profile-container">
          <div className="profile-details">
              <div className="profile-details-title">{profileTitle}</div>

              <div className="profile-details-img-container">
                  <img 
                      src={ProfileTestImg} 
                      className="profile-details-img" 
                      alt="Icon"
                  />
              </div>

              <div className="profile-details-texts">
                  <span className="user-name">{user.userName}</span>

                  <p>Email: {user.email}</p>
                  <p>Telefone: {user.phone}</p>
                  <p>Endereço: {user.address}</p>
                  <p>Senha: {user.password}</p>
              </div>
          </div>

          <div className="profile-content">
            {
              arrLastVideos && !!arrLastVideos?.length && (
                <div className="last-videos-container">
                  <span>
                    Continue de onde parou
                  </span>

                  <div className="last-videos">
                    {arrLastVideos && arrLastVideos.map((item, index) => (
                      <VideoCard
                        key={index}
                        showEyeToVisualize={item.showEyeToVisualize}
                        caminho={item.midia}
                        onPressPrevArrow={item.handlePrev}
                        showVideo={true}
                        title={item.title}
                        subTitle={item.subTitle}
                      />
                    ))}
                  </div>
              </div>

              )
            }
              <div className="delete-account">              
                <h2>
                  Excluir conta
                </h2>

                <span>
                  Se você excluir sua conta, todos os dados relacionados a você serão deletados e não será possível a restauração.
                  A exclusão da conta não elimina o recebimento de e-mails da SkillUp Academy. Para que isso aconteça, peça no oi@skillUpAcademy.com.br.
                </span>
              </div>

  
              <Popconfirm
                title="Tem certeza que deseja excluir?"
                onConfirm={onDeleteProfile}
                okText="Sim"
                cancelText="Não"
                placement="top"
                >
                  <Tooltip placement="top" title="Excluir">
                    <button className="delete-button">
                        Excluir Minha conta 
                    </button>
                </Tooltip>
              </Popconfirm>

          </div>
        </Container>
    );
}
