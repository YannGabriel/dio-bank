
interface InputProps{
  type: string;
  placeholder?: string;
  className: string;
  id: string;
}

export const Input = ({type, placeholder, className, id}: InputProps) =>{
  return(
    <input type={type} placeholder={placeholder} className={className} id ={id}>
    </input>
  )
}