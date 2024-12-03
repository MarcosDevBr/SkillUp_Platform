export interface ISignInViewProps {
    isLoading: boolean;
    email: string;
    password: string;
    onSignIn?: (username: string, password: string) => void;
    onSubmit: () => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}