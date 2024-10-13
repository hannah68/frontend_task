import { Link, useLocation } from "react-router-dom";

import * as S from "./styles";
import { sidebarItems } from "../sidebarItems";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  return (
    <S.Layout>
      {/* Sidebar */}
      <S.Sidebar>
        <S.Logo src="/icon.png" alt="CourtCorrect Logo" />
        <S.Sidebarlist>
          {sidebarItems.map(item => (
            <Link to={item.route} key={item.id}>
              <S.SidebarItem isActive={location.pathname === item.route}> {item.icon}</S.SidebarItem>
            </Link>
          ))}
        </S.Sidebarlist>
      </S.Sidebar>
      {/* Main */}
      <S.Main>
        <Header />
        <S.MainHeader>{children}</S.MainHeader>
      </S.Main>
      {/* Footer */}
      <Footer />
    </S.Layout>
  );
};

export default DashboardLayout;
