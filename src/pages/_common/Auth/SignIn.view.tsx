import { ISignInViewProps } from './SignIn.model';
import {
  Container,
  Form,
  FormContainer,
  LogoContainer,
  Subtitle,
  SysButtom,
  Text
} from './SignIn.style';

import { SkillUpBackgroundIcon, SkillUpBackground} from '../../../assets/index'
import TextInput from '../../../components/primitives/TextInput/TextInput';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function SignInView({ 
  isLoading, 
  onSubmit, 
  onPasswordChange, 
  onEmailChange
}: ISignInViewProps) {
  return (
      <Container>
        <LogoContainer>
            <img 
              src={SkillUpBackground} 
              alt="Icon" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
        </LogoContainer>

        <FormContainer>
          <img 
              src={SkillUpBackgroundIcon} 
              alt="Icon" 
              style={{ 
                width: 202, 
              }} 
            />
            <Subtitle>Acesse sua conta</Subtitle>
          <Form>

            <TextInput
                label={'E-mail'}
                placeholder={'Seu e-mail '}
                name="email"
                type="text"
                maxLength={255}
                onChange={onEmailChange}
                allowClear
            />

            <TextInput
                label={'Senha'}
                placeholder={'Seu senha '}
                name="senha"
                type="password"
                maxLength={255}
                showEyeIcon
                onChange={onPasswordChange}
            />

            <SysButtom 
              className='sing-in-button' 
              onClick={onSubmit}
              type="primary"
            >
              {
                isLoading ? (
                  <Spin
                    spinning
                    indicator={
                      <LoadingOutlined style={{ fontSize: 24, color: '#FFFFFF' }} />
                    }
                  />
                ) : <Text>Entrar</Text>
              }
            </SysButtom>

          </Form>
        </FormContainer>

      
      </Container>
  );
}
