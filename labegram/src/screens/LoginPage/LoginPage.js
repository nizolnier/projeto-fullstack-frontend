import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { goToFeed, goToSignUp } from '../../router/coordinator'
import { login } from '../../services/user'
import logo from '../../assets/photo-camera.svg'
import { FormControl, FormLabel, Input, Button, Heading, InputLeftElement, InputGroup } from "@chakra-ui/react"
import { LockIcon, EmailIcon } from '@chakra-ui/icons'
import { Anchor, FormContainer, LoginContainer, Logo, Message, MainContainer } from './styled'

function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" })
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSubmission = (e) => {
    e.preventDefault()
    login(form, setLoading)
    reset()
    goToFeed(history)
  }

  return (
    <MainContainer>
      <LoginContainer borderWidth="1px" borderRadius="lg">
        <Logo src={logo} />
        <Heading textAlign="center" p="0.2em">Log in</Heading>
        <FormContainer onSubmit={handleSubmission}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input required placeholder="Type your email" type="email" onChange={onChange} value={form.email} name="email" />
            </InputGroup>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input required placeholder="Type your password" type="password" value={form.password} onChange={onChange} name="password" />
            </InputGroup>
          </FormControl>
          <Button isLoading={loading} colorScheme="pink" variant="solid" type="submit">Login</Button>
        </FormContainer>
        <Message>
          <h1>New to Labegram?</h1>
          <Anchor onClick={() => goToSignUp(history)}>Sign up!</Anchor>
        </Message>
      </LoginContainer>
    </MainContainer>
  );
}

export default LoginPage;