import { Box } from "@chakra-ui/layout"
import styled from 'styled-components'

export const SignUpContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
    justify-content: center;
    padding: 1em;
    background-color: white;
    border: 1px solid #D7D7D7;
    &:hover {
        border: 1px solid #A7A9AB;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 65vh;
    justify-content: space-around;
    margin-bottom: 15px;
`

export const MainContainer = styled.div`
    height: 92vh;
    background-color: #DAE0E6;
    padding-top: 2em;
`