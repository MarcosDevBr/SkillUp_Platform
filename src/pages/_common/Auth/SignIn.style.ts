import styled from 'styled-components';
import { Button } from 'antd'

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #18181C;
  flex-direction: row;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 560px; 
  max-width: 1100px;
  background-color: #18181C;
  padding: 5rem;
  overflow: auto;
`;

const LogoContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: #18181C;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: #1f2937;
`;

const Subtitle = styled.p`
  font-size: 30px;
  color: #C4C4CC;
  --tw-text-opacity: 1;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 40px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #4b5563;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const SysButtom = styled(Button)`
  height: 48px;
  width: 100%;
  margin-top: 20px;
  padding: 1rem;
  background-color: #8257E5;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9A76EB;
  }

  &:active {
    background-color: #9A76EB;
  }
`;

const Text = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

export {
  Container,
  FormContainer,
  Title,
  Subtitle,
  Form,
  FormField,
  Label,
  Input,
  SysButtom,
  LogoContainer,
  Text
};
