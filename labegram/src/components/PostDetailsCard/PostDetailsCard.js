import React from 'react'
import { StyledBox, TagContainer, TextContainer, UserThings } from './styled'
import { Avatar } from "@chakra-ui/react"
import { Heading, Text } from '@chakra-ui/layout'

function PostDetailsCard(props) {
    
    const prettyTags = (tags) => {
        if(typeof(tags) !== "undefined"){
            return tags.split(", ").map((item) => {
                return (<Text p="1">#{item}</Text>)
            })
        }
    }

    return (<StyledBox borderWidth="1px" borderRadius="lg" >
    <TextContainer>

        <UserThings>
            <Avatar size="sm" src={props.profilePic} />
            <Heading size="xs" pl="0.6em">{props.nickname}</Heading>
        </UserThings>

        <img src={props.file}/> 
        
        <Text p="2"><b>{props.nickname}</b> {props.subtitle}</Text>
        <TagContainer>
        {prettyTags(props.tags)}
        </TagContainer>
        
        <Text p="1" fontSize="xs">{props.date} - {props.collection}</Text>
    </TextContainer>

</StyledBox>
    )
}

export default PostDetailsCard;