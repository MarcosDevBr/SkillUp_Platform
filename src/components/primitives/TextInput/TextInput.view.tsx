import { Input as AntdInput } from 'antd';
import { ITextInputViewProps } from './TextInput.model';
import { Container } from './TextInput.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function TextInputView({
  label, 
  maxLength,
  containerStyle,
  labelStyle,
  showEyeIcon,
  type = 'text',
  ...props
}: ITextInputViewProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === 'password';


  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <Container style={containerStyle}>
      <label className='textInput-label' style={labelStyle}>
        {label}
      </label>
      <AntdInput
        {...props}
        className="textInput-input"
        maxLength={maxLength}
        type={isPasswordType && showPassword ? "text" : type}  
		classNames={{ input: 'textInput-input'}}
        suffix={showEyeIcon && (
          <FontAwesomeIcon 
            icon={showPassword ? faEyeSlash : faEye} 
            size="sm" 
            className='eyeIcon'
            onClick={togglePasswordVisibility}
          />
        )}
      />
    </Container>
  );
}
