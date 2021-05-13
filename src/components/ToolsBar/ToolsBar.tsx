
// import Button from "../../utils/Button/Button";

export default function ToolsBar(props:JSX.ElementChildrenAttribute) {
  return (
    <div className="w-full h-full flex justify-around items-center bg-blue-400 mb-0">
     {props.children}
    </div>
  );
}
