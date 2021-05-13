import "./Layout.scss";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC = ({ children }) => (
  <div>
    <Header></Header>
    <div className="px-10">{children}</div>;
  </div>
);

const Layout2: React.FC = ({ children }) => (

<>
    <div className="nav">
      <Navbar />
    </div>

    <div className="main">{children}</div>

    <div className="bottom-banner">
      <Banner />
    </div>

</>
);

export { Layout, Layout2 };
