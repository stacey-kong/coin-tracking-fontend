interface ButtonProps {
  text: string;
  onclick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="w-1/6 h-1/3 p-3 bg-blue-200 rounded-lg box-border"
      onClick={props.onclick}
    >
      {props.text}
    </button>
  );
}
