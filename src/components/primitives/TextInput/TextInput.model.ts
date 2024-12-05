export interface ITextInputProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    maxLength: number;
    showEyeIcon?: boolean;
    containerStyle?: React.CSSProperties | undefined;
    labelStyle?: React.CSSProperties | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    allowClear?: boolean;
}

export type ITextInputViewProps = ITextInputProps
