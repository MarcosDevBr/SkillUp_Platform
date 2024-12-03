import { ITextInputProps } from "./TextInput.model";
import TextInputView from "./TextInput.view";

export default function TextInput(props: ITextInputProps) {

	return (
		<TextInputView {...props}/>
	);
}
