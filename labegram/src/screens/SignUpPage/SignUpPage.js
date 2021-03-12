import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user'
import { FormControl, FormLabel, Input, Button, Heading, InputLeftElement, InputGroup, Checkbox } from "@chakra-ui/react"
import { AtSignIcon, LockIcon, EmailIcon, LinkIcon } from '@chakra-ui/icons'
import { Anchor, FormContainer, SignUpContainer, Logo, Message, MainContainer, Terms } from './styled'
import logo from '../../assets/photo-camera.svg'
import { goToLogin } from '../../router/coordinator'

function SignUpPage() {
  const { form, onChange, reset } = useForm({ name: "", email: "", nickname: "", password: "", profilePicture: "" })
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSubmission = (e) => {
    e.preventDefault()
    signUp(form, history, setLoading)
    reset()
  }

  return (
    <MainContainer>
      <SignUpContainer borderWidth="1px" borderRadius="lg">
        <Logo src={logo} />
        <Heading textAlign="center" p="0.2em">Sign up</Heading>
        <FormContainer onSubmit={handleSubmission}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <Input required placeholder="Type your name" value={form.name} onChange={onChange} name="name" />
            </InputGroup>
          </FormControl>
          <FormControl id="nickname">
            <FormLabel>Nickname</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="gray.300" />}
              />
              <Input required placeholder="Create a nickname" value={form.nickname} onChange={onChange} name="nickname" />
            </InputGroup>
          </FormControl>
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
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input required placeholder="Type a password" type={"password"} value={form.password} onChange={onChange} name="password" />
            </InputGroup>
          </FormControl>
          <FormControl id="profilePicture">
            <FormLabel>Profile Picture</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LinkIcon color="gray.300" />}
              />
              <Input required placeholder="Add a profile picture" value={form.profilePicture} onChange={onChange} name="profilePicture" />
            </InputGroup>
          </FormControl>
          <Checkbox required>I agree with the <Terms href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Use</Terms></Checkbox>
          <Button isLoading={loading} colorScheme="pink" variant="solid" type="submit">SIGN UP</Button>
        </FormContainer>
        <Message>
          <h1>Already has an account?</h1>
          <Anchor onClick={() => goToLogin(history)}>Log in!</Anchor>
        </Message>
      </SignUpContainer>
    </MainContainer>
  );
}

export default SignUpPage;