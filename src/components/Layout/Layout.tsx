import { FunctionComponent } from "react";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Body: (prop: LayoutProps) => JSX.Element = (prop: LayoutProps) => {
  return <div className="px-10">{prop.children}</div>;
};

const Layout: React.FC = ({ children }) => (
  <div>
    <Navbar></Navbar>
    <Body>{children}</Body>
  </div>
);


export default Layout 
