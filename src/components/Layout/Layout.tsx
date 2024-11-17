
import { Header } from "../Header/header"
import { LoginCard } from "../LoginCard/loginCard"

export const Layout  = ({children}: any) =>{


  return(
    <>
    <Header/>
    {children}
    <LoginCard/>
    </>
  )
}