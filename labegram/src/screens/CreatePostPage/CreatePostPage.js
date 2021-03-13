import React from 'react'
import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { createPost } from '../../services/post'
import { FormControl, FormLabel, Input, Button, Heading, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { FormContainer, SignUpContainer, MainContainer } from './styled'
import { LinkIcon } from '@chakra-ui/icons';

function CreatePostPage() {
  useProtectedPage()
    const { form, onChange, reset } = useForm({ subtitle: "", file: "", tag: "", collection: "" })
    const history = useHistory()

    const handleSubmission = (e) => {
        e.preventDefault()
        createPost(form, history)
        reset()
    }

    // return (<div>
    //   <form onSubmit={handleSubmission}>
    //     <input placeholder="tag" onChange={onChange} value={form.tag} name="tag" />
    //     <input placeholder="collection" onChange={onChange} value={form.collection} name="collection" />
    //     <button>Login</button>
    //   </form>
    // </div>
    return (
      <MainContainer>
      <SignUpContainer borderWidth="1px" borderRadius="lg">
        <Heading textAlign="center" p="0.2em">Create Post</Heading>
        <FormContainer onSubmit={handleSubmission}>
          <FormControl id="subtitle">
            <FormLabel>Subtitle</FormLabel>
            <InputGroup>
              <Input required placeholder="Create a subtitle" value={form.subtitle} onChange={onChange} name="subtitle" />
            </InputGroup>
          </FormControl>
          <FormControl id="file">
            <FormLabel>File</FormLabel>
            <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<LinkIcon color="gray.300" />}
              />
              <Input required placeholder="Add the image url" value={form.file} onChange={onChange} name="file" />
            </InputGroup>
          </FormControl>
          <FormControl id="tag">
            <FormLabel>Tags</FormLabel>
            <InputGroup>
              <Input required placeholder="Type your tags" type="tag" onChange={onChange} value={form.tag} name="tag" />
            </InputGroup>
          </FormControl>
          <FormControl id="collection">
            <FormLabel>Collection</FormLabel>
            <InputGroup>
              <Input required placeholder="Add to a collection" value={form.collection} onChange={onChange} name="collection" />
            </InputGroup>
          </FormControl>
         <Button colorScheme="blue" variant="solid" type="submit">POST</Button>
        </FormContainer>
      </SignUpContainer>
    </MainContainer>

    )
}

export default CreatePostPage;


