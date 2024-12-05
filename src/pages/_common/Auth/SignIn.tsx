
import { useState } from 'react';
import SignInView from './SignIn.view';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import paths from '../../../routes/AppRoute.model';

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!email || !password) {
            toast.error('Por favor, preencha todos os campos');
        } else if (!emailRegex.test(email)) {
            toast.error('Por favor, insira um email válido');
        } else {
            handleSignIn(email, password);
            setIsLoading(true)
        }
    };
    

    async function handleSignIn(email: string, password: string) {
        try {
          console.log(email, password)

          await new Promise((resolve) => setTimeout(resolve, 1000))
          toast.success('Login realizado com sucesso!')

          navigate(paths.home.root, { replace: true });    

        } catch (error) {
            console.log("Error", error)
            toast.error('Erro ao logar')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <SignInView 
            isLoading={isLoading}
            email={email}
            password={password}
            onSubmit={onSubmit}
            onPasswordChange={onPasswordChange}
            onEmailChange={onEmailChange}
         />
    )
}
