import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPostDetails } from '../../router/coordinator';

function PostCard(props) {
    const history = useHistory()

    return (<div onClick={() => goToPostDetails(history, props.id)}>
        <p>{props.nickname}</p>
        <img src={props.profilePic} />
        <img src={props.file} />
        <p>{props.subtitle}</p>
        <p>{props.tags}</p>
    </div>

    )
}

export default PostCard;