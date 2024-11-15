

interface ButtonProps {
  text: string;
  event: () => void;
}

export const Button = ({text, event}:ButtonProps) =>{
  return(
    <button className="FormTarget">
      <p className="textValue">{text}</p>
    </button>
  );
}