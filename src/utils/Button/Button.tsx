interface ButtonProps {
  text: string;
  onclick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <div
      className="w-1/4 lg:w-1/6 h-2/3 bg-blue-200 rounded-lg box-border flex items-center"
      onClick={props.onclick}
    >
     <p className="w-full text-center">{props.text}</p> 
    </div>
  );
}
