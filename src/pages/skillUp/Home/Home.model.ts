import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
export interface HomeViewProps {
    isLoading: boolean;
    siderData: Array<{ 
        name: string,  
        isSelect: boolean,
        iconType: IconDefinition;
        onClick: () => void,   
    }>;
    onClickProfile: () => void;
    onclickHelp: () => void;
}