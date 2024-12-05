export interface IProfileViewProps {
    arrLastVideos?: IArrLastVideos[];
    profileTitle: string;
    user: IUserAccontObj;
    onDeleteProfile: () => void;
}

export interface IArrLastVideos {
    midia: string;
    showEyeToVisualize?: boolean;
    handlePrev: () => void;
    title: string;
    subTitle: string;
    date: string;
    type: number
}

export interface IUserAccontObj {
    userName: string;
    email: string;
    phone: string;
    address: string;
    password: string;
}
