interface ButtonProps {
  text: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="w-1/6 h-1/3 p-3 bg-blue-200 rounded-lg box-border">
      {props.text}
    </button>
  );
}
