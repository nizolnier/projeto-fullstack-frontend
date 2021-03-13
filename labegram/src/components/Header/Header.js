import React from 'react'
import { goToFeed, goToLogin, goToSignUp } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import { Button } from "@chakra-ui/react"
import { HeaderContainer, ButtonsContainer, Logo, Logout } from './styled'

import logo from '../../assets/name-logo.svg'

function Header() {
  const history = useHistory()
  const token = localStorage.getItem("token")

  const logout = () => {
    const beSure = window.confirm("Are you sure you want to log out?")
    if (beSure) {
      localStorage.removeItem("token");
      goToLogin(history)
    }
  }


  if (token) {
    return (<HeaderContainer>
      <Logo src={logo} onClick={() => goToFeed(history)} />
      <Logout w={4} h={4} color="red" onClick={logout} />

    </HeaderContainer>
    )
  } else {
    return (<HeaderContainer>
      <Logo src={logo} />
      <ButtonsContainer>
        <Button colorScheme="blue" onClick={() => goToSignUp(history)}>Sign Up</Button>
        <Button ml="1em" colorScheme="blue" variant="outline" onClick={() => goToLogin(history)}>Log in</Button>
      </ButtonsContainer>
    </HeaderContainer>)
  }
}

export default Header;