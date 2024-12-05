import { ITemplateSiderMenuContentProps } from "./TemplateSiderMenuContent.model";
import TemplateSiderMenuContentView from "./TemplateSiderMenuContent.view";

export default function SiderContent(props: ITemplateSiderMenuContentProps) {

	// const configuracaoSessao = useLocalStorage().getItem('configuracaoSessao');

	return (
		<TemplateSiderMenuContentView 
			{...props}
			mainMenuVisible={true} 
		/>
	);
}
