import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
`

export const StyledBox = styled(Box)`
    display: flex;
    width: 80vw;
    max-width: 500px;
    background-color: white;
    margin: 1em;
    border: 1px solid #D7D7D7;
    &:hover {
        border: 1px solid #A7A9AB;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 10vh;
    justify-content: space-around;
    margin-bottom: 15px;
`