import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react"

export interface ITemplateSiderMenuContentProps {
    sider: Array<{ 
        name: string,  
        isSelect: boolean,
        iconType: IconDefinition;
        onClick: () => void,   
     }>
    content?: ReactElement;
    showSider?: boolean;
    onclickHelp: () => void;
}

export interface ITemplateSiderMenuContentViewProps extends ITemplateSiderMenuContentProps {
    mainMenuVisible: boolean | undefined,
}
