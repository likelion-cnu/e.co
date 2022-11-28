import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

import theme from "../style/Theme";
import Header from "../components/Header";
import Message from "../components/Message";

function Home() {
  const target = useRef(undefined);
  const [messages, setMessages] = useState([]);
  const numOfRows = 10;
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const loadMessageList = async () => {
      const response = await axios.get(process.env.REACT_APP_OPEN_URL, {
        params: {
          ServiceKey: process.env.REACT_APP_OPEN_KEY,
          type: "json",
          pageNo: pageNo,
          numOfRows: numOfRows,
        },
      });

      const loadMessageList = response.data.DisasterMsg[1].row;

      setMessages((messages) => [...messages, ...loadMessageList]);
      setPageNo((pageNo) => pageNo + 1);
    };

    const onIntersect = async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await loadMessageList();
        observer.observe(entry.target);
      }
    };

    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, pageNo]);

  return (
    <Body>
      <Header />
      {messages.map((message) => (
        <Message
          key={message.md101_sn}
          id={message.md101_sn}
          location_name={message.location_name}
          date={message.create_date}
          text={message.msg}
        />
      ))}
      <div ref={target} className="loading">
        <ReactLoading
          type="spin"
          color={theme.firstGray}
          width="28px"
          height="28px"
        />
      </div>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${(props) => props.theme.bgGradient};

  .loading {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Home;
