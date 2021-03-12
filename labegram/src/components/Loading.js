import React from 'react'
import styled, { keyframes } from 'styled-components'

const leftSwing = keyframes`
    50 %,
    100 % {
    transform: translateX(95 %);
    }
`

const rightSwing = keyframes`
    50 % {
        transform: translateX(-95 %);
    }
    100 % {
        transform: translateX(100 %);
    }
`

const Balls = styled.div`
    width: 4em;
    display: flex;
    flex - flow: row nowrap;
    align - items: center;
    justify - content: space - between;
`

const MiddleDiv = styled.div`
    width: 0.8em;
    height: 0.8em;
    border - radius: 50 %;
    background - color: #fc2f70;
`
const LeftDiv = styled.div`
    transform: translateX(-100 %);
    animation: ${leftSwing} 0.5s ease -in alternate infinite;
`
const RightDiv = styled.div`
    transform: translateX(-95 %);
    animation: ${rightSwing} 0.5s ease - out alternate infinite;
`

function Loading() {
    return (<Balls>
        <LeftDiv></LeftDiv>
        <MiddleDiv></MiddleDiv>
        <RightDiv></RightDiv>
    </Balls>
    )
}

export default Loading;