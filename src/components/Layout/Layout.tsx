import { FunctionComponent } from "react";
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
  <div className="h-screen">
    <div>
      <Navbar />
    </div>

    <div className="h-4/5">{children}</div>

    <div className="fixed bottom-0 w-full ">
      <Banner />
    </div>
  </div>
);

export { Layout, Layout2 };
