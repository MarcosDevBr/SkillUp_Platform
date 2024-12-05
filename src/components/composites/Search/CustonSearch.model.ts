export interface ICustonSearchProps {
    placeholder?: string;
    
}
export interface ICustonSearchViewProps extends ICustonSearchProps{
    defaultValue?: string | number | readonly string[] | undefined;
    onSearchChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
