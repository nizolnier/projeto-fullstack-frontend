import styled from 'styled-components'
import { Box } from '@chakra-ui/react'

export const StyledBox = styled(Box)`
    display: flex;
    width: 80vw;
    max-width: 500px;
    background-color: white;
    border: 1px solid #D7D7D7;
    &:hover {
        border: 1px solid #A7A9AB;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
`

export const UserThings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    padding-bottom: 0.6em;
    width: 100%;
`