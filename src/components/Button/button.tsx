

interface ButtonProps {
  text: string;
}

export const Button = ({text}:ButtonProps) =>{
  return(
    <button className="FormTarget">
      <p className="textValue">{text}</p>
    </button>
  );
}