

import { Button } from "../Button/button"
import { Input } from "../Input/input"
import { Validation } from "./loginValidation"

export const LoginCard = () => {

  return(
   <>
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
    event={() => Validation()}
    text="Enviar"
    />
   </>
  )
}