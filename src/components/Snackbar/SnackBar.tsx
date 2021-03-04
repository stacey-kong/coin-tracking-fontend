import CloseIcon from "@material-ui/icons/Close";

const successSnackbar = () => {
  return (
    <div className="absolute bottom-2 left-1 w-1/2 p-5 inline-flex bg-green-400 text-white rounded text-lg font-semibold">
      <p >I am a success snackbar</p>
      <span className="absolute right-2">
        <CloseIcon />
      </span>
    </div>
  );
};
const errorSnackbar = () => {
  return (
    <div className="absolute bottom-2 left-1 w-1/2 p-5 bg-red-400 text-white rounded text-lg font-semibold">
      <p>I am a error snackbar</p>
    </div>
  );
};

export default function Snackbar() {
  return successSnackbar();
}
