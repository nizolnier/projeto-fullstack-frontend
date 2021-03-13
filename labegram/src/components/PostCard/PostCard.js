import { Heading, Text } from '@chakra-ui/layout';
import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPostDetails } from '../../router/coordinator';
import { StyledBox, TextContainer, UserThings } from './styled';
import { Avatar } from "@chakra-ui/react"

function PostCard(props) {
    const history = useHistory()

    return(
        <StyledBox borderWidth="1px" borderRadius="lg" >
        <TextContainer onClick={() => goToPostDetails(history, props.id)}>

            <UserThings>
                <Avatar size="sm" src={props.profilePic} />
                <Heading size="xs" pl="0.6em">{props.nickname}</Heading>
            </UserThings>

            <img src={props.file}/> 
            <Text p="2"><b>{props.nickname}</b> {props.subtitle}</Text>

        </TextContainer>

    </StyledBox>
    )
}

export default PostCard;