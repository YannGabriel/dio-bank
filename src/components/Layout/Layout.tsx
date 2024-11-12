
import { Header } from "../Header/header"
import { Button } from "../Button/button"
import { Input } from "../Input/input"

export const Layout  = ({children}: any) =>{
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
    text="Enviar"
    />
    </>
  )
}