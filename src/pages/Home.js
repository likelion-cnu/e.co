import styled from "styled-components";
import Header from "../components/Header";
import Message from "../components/Message";
import {useEffect, useState} from "react";

function Home(){
  const [messages, setMessages] = useState([]);

  const example = {
    id: 1,
    title: "안개주의보 발표에 따른 재난예방활동 철저 및 추진실적 제출",
    type: "안개",
    text: "11월10일 21시30분을 기해&nbsp;전라남도(화순군), 충청남도(서천군, 청양군, 부여군, 아산시, 공주시)&nbsp; 지역에 안개주의보가 발효되었으니 해당 지자체 및 관계기관에서는 안개로 인한 피해가 없도록 아래사항을 유념하여 안전사고 등 예방대책에 만전을 기하여 주시기 바라며, 시·도에서는 안개주의보에 따른 교통안전대책 추진실적을 붙임2 서식에 따라 명일 07시까지 제출하여 주시기 바랍니다",
    numComments: 12
  }

  useEffect(() => {
    setMessages([example, example, example, example, example, example])
  })
  return (
    <Body>
    <Header/>
      {messages.map((message) => (<Message id={message.id} title={message.title} type={message.type} text={message.text} numComments={message.numComments} />) )}
    </Body>
  )
}

const Body = styled.div`
  width: 100vw;
  background: ${props => props.theme.bgGradient};
`;

export default Home;
