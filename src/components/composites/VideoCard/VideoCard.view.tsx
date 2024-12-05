import { Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { IVideoCardViewProps } from "./VideoCard.model";
import { Container, CustomModal, VideoCard } from "./VideoCard.style";
import enumTipoMidia from "../../../enums/enumTipoMidia";
import SysPinner from "../../primitives/SysPinner/SysPinner";

export default function VideoCardView({
  caminho,
  showEyeToVisualize,
  showFullScreen,
  isHover,
  spinning,
  thumbnail,
  browserHeight,
  midiaWidth,
  midiaHeight,
  title,
  subTitle
}: IVideoCardViewProps) {
  const videoThumbnail = thumbnail || enumTipoMidia.DEFAULT_IMAGE_VIDEO;

  return (
    <Container>
      <CustomModal
        title="Caso não carregue o vídeo, faça o seu download.."
        open={showFullScreen.value}
        centered
        footer={null}
        bodyProps={{ style: { height:  '50vh', width: '100%' }}}
        maskClosable
        onCancel={showFullScreen.setFalse}
        width={'50%'}
        wrapStyle={{ backgroundColor: 'rgba(18, 18, 20, 0.8)'}}
      >
        <video
          style={{ maxHeight: browserHeight, width: midiaWidth || '100%', height: midiaHeight || '100%' }}
          controls
          src={caminho}
          preload="auto"
        >
          <p>
            {"Your browser doesn't support HTML5 video. Here is a "}<a href={caminho}>link to the video</a>
            {' instead'}
          </p>
        </video>
      </CustomModal>

    <VideoCard>
      <div
        className="thumbnail"
        onClick={(e) => { e.stopPropagation(); showFullScreen.setTrue(); }} 
        onMouseEnter={(e) => { e.stopPropagation(); if (showEyeToVisualize) isHover.setTrue(); }}
        onMouseLeave={(e) => { e.stopPropagation(); isHover.setFalse(); }}
      >
        <img
          alt="img"
          src={videoThumbnail}
          style={{ width: '100%', height: '100%' }}
        />
        {isHover.value && showEyeToVisualize && (
          <div className="hover-icons-wrapper">
            <SysPinner spinning={spinning} />
            <Tooltip title={"Visualizar"}>
              <EyeOutlined onClick={showFullScreen.setTrue} className="icon" />
            </Tooltip>
          </div>
        )}
      </div>

      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{subTitle}</div>
        <div className="buttons">
          <button className="access-button" onClick={() => showFullScreen.setTrue()}>Assistir</button>
        </div>
      </div>
    </VideoCard>
  </Container>
  );
}
