import React from 'react'
import { FormControl, Input, Button, Heading } from "@chakra-ui/react"
import { FormContainer, LoginContainer, StyledBox } from './styled';
import { useHistory } from 'react-router';
import { goToCreate } from '../../router/coordinator';

function CreatePost() {
  const history = useHistory()

    return (<StyledBox borderWidth="1px" borderRadius="lg" onClick={() => goToCreate(history)}>
        <LoginContainer>
            <Heading size="lg" textAlign="center" pb="0.2em">Create Post</Heading>
            <FormContainer>
                <Button colorScheme="blue" variant="solid" type="submit">POST</Button>
            </FormContainer>
        </LoginContainer>
    </StyledBox>
    )
}

export default CreatePost;
