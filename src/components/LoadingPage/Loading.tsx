import logo from "../../dog.svg";
import "./Loading.scss";

export default function (){
    return (
        <div className="loadingWrapper">
             <img src={logo} alt="doglogo" className="h-10 m-auto mx-0 " width="50" />
        </div>
    )
}