

import dioLogo from "../../images/dioLogo.png"

export const Header = () => {
  return(
    <header className='container-top'>
      <img src={dioLogo} alt="Dio Logo" className="HeaderLogo" />
      <h1 className="appName">Bank</h1>
    </header>
  )
}