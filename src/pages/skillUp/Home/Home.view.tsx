import CustonHeader from "../../../components/composites/CustonHeader/CustonHeader";
import SysPinner from "../../../components/primitives/SysPinner/SysPinner";
import { HomeViewProps } from "./Home.model";
import { Container } from "./Home.style";

export default function HomeView({
  isLoading
}: HomeViewProps) {
    return (
        <SysPinner spinning={isLoading}>
          <Container>

            <CustonHeader/>
             
          </Container>
        </SysPinner>
    );
}
