import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";
import EmergencyTitle from "../components/EmergencyTitle";
import OpenMessage from "./OpenMessage";
import axios from "axios";

function Message({ id, location_name, date, text }) {
  const [numComments, setNumComments] = useState(0);
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = useState(false);

  const loadMessageComments = async (id) => {
    const { data } = await axios.get(
      process.env.REACT_APP_ECO_API + id + "/comments"
    );

    setNumComments(data.length);
    setComments([...data]);
  };

  useEffect(() => {
    loadMessageComments(id);
  }, [id, reload]);

  return (
    <MessageSection
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <div className="message-content">
        <EmergencyTitle title={location_name} date={date} />
        <EmergencyText>{text}</EmergencyText>
      </div>
      {!isOpen ? (
        <div className="bottom">
          <Cnum>
            <AiOutlineComment size="18" />
            &nbsp;
            {!numComments ? 0 : numComments - 1}
          </Cnum>
        </div>
      ) : (
        <OpenMessage
          id={id}
          reload={reload}
          setReload={() => {
            setReload((reload) => !reload);
          }}
          comments={comments}
        />
      )}
    </MessageSection>
  );
}

const MessageSection = styled.div`
  width: 60%;
  margin: 30px auto;
  padding-top: 30px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.white};
  line-height: 140%;

  cursor: pointer;

  :hover {
    transform: scale(1.02);
    transition: 0.17s;
  }

  .message-content {
    padding: 0 30px 15px 30px;
  }

  .bottom {
    height: 32px;
    border-top: ${(props) => props.theme.borderTop};
    line-height: 28px;
  }
`;

const EmergencyText = styled.div`
  font-size: 17px;
  text-align: justify;
  line-height: 160%;
  overflow: hidden;
`;

const Cnum = styled.div`
  color: ${(props) => props.theme.firstGray};
  font-size: 12px;
  float: right;
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

export default Message;
