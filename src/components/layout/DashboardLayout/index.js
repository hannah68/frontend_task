import * as S from "./styles";
import { sidebarItems } from "../sidebarItems";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const DashboardLayout = ({ children }) => {
  return (
    <S.Layout>
      <S.Sidebar>
        <S.Logo src="/icon.png" alt="CourtCorrect Logo" />
        <S.Sidebarlist>
          {sidebarItems.map(item => (
            <S.SidebarItem key={item.id}> {item.icon}</S.SidebarItem>
          ))}
        </S.Sidebarlist>
      </S.Sidebar>
      <S.Main>
        <Header />
        {children}
      </S.Main>
      <Footer />
    </S.Layout>
  );
};

export default DashboardLayout;
