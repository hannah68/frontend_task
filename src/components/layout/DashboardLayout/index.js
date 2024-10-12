import { Layout, Sidebar, SidebarItem, Sidebarlist, Main, Logo } from "./styles";
import { sidebarItems } from "../sidebarItems";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar>
        <Logo src="/icon.png" alt="CourtCorrect Logo" />
        <Sidebarlist>
          {sidebarItems.map(item => (
            <SidebarItem key={item.id}> {item.icon}</SidebarItem>
          ))}
        </Sidebarlist>
      </Sidebar>
      <Main>
        <Header />
        {children}
      </Main>
      <Footer />
    </Layout>
  );
};

export default DashboardLayout;
