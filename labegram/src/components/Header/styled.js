import styled from 'styled-components'
import { CloseIcon } from '@chakra-ui/icons'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 8vh;
  align-items: center;
  margin: 0 1em;
`

export const ButtonsContainer = styled.div`
  display: flex;
`
export const Logo = styled.img`
  width: 12%;
  cursor: pointer;
`

export const Logout = styled(CloseIcon)`
  cursor: pointer;
`