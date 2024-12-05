import { IVideoCardProps } from './VideoCard.model';
import VideoCardView from './VideoCard.view';
import { useBoolean } from 'react-hanger';

export default function VideoCard(props: IVideoCardProps) {

    const showFullScreen = useBoolean(false);
    const isHover = useBoolean(false);
    const BrowserHeight = `${window.innerHeight / 2}px`;


    const onClose = () => {
        showFullScreen.setFalse();
    };


    return (
        <VideoCardView 
            {...props}
            showFullScreen={showFullScreen}
            browserHeight={BrowserHeight}
            isHover={isHover}
            onClose={onClose}
        />
    )
}
