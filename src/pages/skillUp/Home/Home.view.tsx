import { Outlet } from "react-router";
import CustonHeader from "../../../components/composites/CustonHeader/CustonHeader";
import SysPinner from "../../../components/primitives/SysPinner/SysPinner";
import { HomeViewProps } from "./Home.model";
import { Container } from "./Home.style";
import TemplateSiderMenuContent from "../../../templates/TemplateSiderMenuContent/TemplateSiderMenuContent";

export default function HomeView({
  isLoading,
  siderData,
  onClickProfile,
  onclickHelp
}: HomeViewProps) {

    return (
        <SysPinner spinning={isLoading}>
          <Container>

            <CustonHeader  onClickProfile={onClickProfile} />

            <TemplateSiderMenuContent
              sider={siderData}
              onclickHelp={onclickHelp}
              content={<Outlet /> }
            />
             
          </Container>
        </SysPinner>
    );
}
