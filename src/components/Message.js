import React from 'react';
import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";
import EmergencyTitle from '../components/EmergencyTitle';
import {useNavigate} from "react-router-dom";
import routes from "../router";

function Message({id, title, type, text, numComments}) {
  const navigate = useNavigate();
  return (
        <MessageSection onClick={() => {navigate(routes.message+id)}}>
          <div className="message-content">
            <EmergencyTitle title={title} type={type} />
            <EmergencyText>{text}</EmergencyText>
          </div>
          <div className="bottom">
              <Cnum>
                  <AiOutlineComment size='18'/>&nbsp;
                {numComments}
              </Cnum>
              <Ctime>2015/11/10 21:34:02:843</Ctime>
          </div>
        </MessageSection>
    );
}

const MessageSection = styled.div`
  width: 60%;
  margin: 30px auto;
  padding-top: 30px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.white};
  line-height: 140%;
  
  .message-content {
    padding: 0 30px;
  }
  
  .bottom {
    margin-top: 15px;
    height: 32px;
    border-top: ${props => props.theme.borderTop};
    line-height: 28px;
  }
  
`;

 const EmergencyText = styled.div`
  font-size: 17px;
  text-align: justify;
  line-height: 140%;
  height: 100px;
  overflow: hidden;
`;

 const Cnum = styled.div`
  color: ${props => props.theme.firstGray};
  font-size: 12px;
  float: left;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

 const Ctime = styled.div` 
   color: ${props => props.theme.firstGray};
   font-size: 12px;
   float:right;
   margin-right: 15px;
`;

export default Message;
