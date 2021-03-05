import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { AppState } from "../../redux/rootReducer";
import { alertActions } from "../../redux/Alert/alert.action";

interface snackbarContentProps {
  type: "error" | "success" | "warning" | "default";
  message: String;
  onclick?: any;
}

interface snackbarProps {
  onclick: any;
}
function renderSnackbar(props: snackbarContentProps) {
  let color;
  switch (props.type) {
    case "error":
      color = "bg-red-400";
      break;
    case "success":
      color = "bg-green-400";
      break;
    case "warning":
      color = "bg-yellow-400";
      break;
    default:
      color = "bg-blue-400";
  }

  return (
    <div
      className={`absolute bottom-2 left-1 w-1/2 p-5 inline-flex text-white rounded text-lg font-semibold ${color}`}
    >
      <p>{props.message}</p>
      <span className="absolute right-2">
        <CloseIcon onClick={props.onclick} />
      </span>
    </div>
  );
}

export default function Snackbar(props: snackbarProps) {
  const alertState = useSelector((state: AppState) => state.alert.messages);
  const snackbarContentProps: snackbarContentProps = {
    type: alertState?.type!,
    message: alertState?.message!,
    onclick: props.onclick,
  };
  console.log(snackbarContentProps);
  const snackbar = renderSnackbar(snackbarContentProps);
  return snackbar;
}
