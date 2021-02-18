import Button from "../../utils/Button/Button";

export default function ToolsBar() {
  return (
    <div className="w-full h-40 flex justify-around items-center bg-blue-400 mb-0">
      <Button text="ADD" />
      <Button text="MODIFY" />
    </div>
  );
}
