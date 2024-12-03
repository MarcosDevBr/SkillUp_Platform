import { Spin } from 'antd';
import { ILoadingViewProps } from './Loading.model';
import { Container, LoadingText, SubTitle } from './Loading.style';

export default function LoadingView({
  title = 'Em instantes estará tudo pronto',
  subTitle
}: ILoadingViewProps) {

  return (
    <Container>
      <Spin size="large" style={{}}/>
      {title && <LoadingText>{title}</LoadingText>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
}
