import { CSSProperties } from "react";
import { UseBoolean } from "react-hanger";

export interface IVideoCardProps {
    caminho: string
    showEyeToVisualize?: boolean;
    onPressPrevArrow: () => void;
    showVideo: boolean;
    title: string;
    subTitle: string;
}

export interface IImgs {
    src: string;
    tipoMidia: number;
}

export interface IVideoCardViewProps extends IVideoCardProps {
    caminho: string;
    browserHeight: string;
    showFullScreen: UseBoolean;
    showVideo: boolean;
    isHover: UseBoolean;
    midiaWidth?: string;
    midiaHeight?: string;
    height?: number;
    spinning?: boolean;
    thumbnail?: string;
    style?: CSSProperties | undefined;
    onClose: () => void;
}