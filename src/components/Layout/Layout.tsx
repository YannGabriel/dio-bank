
import { Header } from "../Header/header"
import { Button } from "../Button/button"
import { Input } from "../Input/input"
import { validateInputs } from "../Input/validateInputs"

export const Layout  = ({children}: any) =>{

  const handleLogin = () => {
    const username = (document.getElementById("Username") as HTMLInputElement)?.value;
    const password = (document.getElementById("Password") as HTMLInputElement)?.value;

    if (validateInputs(username, password)) {
      alert("Acesso permitido!")
    } else {
      alert("Invalid username or password");
    }
  };

  return(
    <>
    <Header/>
    {children}
    <Input
    type="username"
    className="InputText"
    id="Username"
    />
    <Input
    type="password"
    className="InputPass"
    id="Password"
    />
    <Button
    event={handleLogin}
    text="Enviar"
    />
    </>
  )
}