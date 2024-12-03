import { Spin } from "antd";
import { ISysPinnerViewProps } from "./SysPinner.model";
import { Container } from "./SysPinner.style";

export default function SysPinnerView({
  spinning,
  children,
  stylePros = {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  }
}: ISysPinnerViewProps) {
    return (
      spinning
      ? (
          <Container className="spinner-container" style={stylePros}>
              <Spin size="large"/>
          </Container>
      )
      : <>{children}</>
    );
}
