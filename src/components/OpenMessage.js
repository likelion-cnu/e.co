import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Emotions from "./Emotions";

function OpenMessage({ id, reload, setReload, comments }) {
  const [commentInput, setCommentInput] = useState("");

  const postComment = async (id) => {
    await axios.post(process.env.REACT_APP_ECO_API + 181431 + "/comments", {
      content: commentInput,
    });
    setCommentInput("");
    setReload();
  };

  return (
    <Section>
      <Emotions id={id} reload={reload} setReload={setReload} />
      <CommentSection>
        <Input>
          <textarea
            id="input"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            type="text"
            placeholder="댓글을 입력하세요"
          />
          <div id="button" onClick={postComment}>
            등록
          </div>
        </Input>
        <CommentList>
          {comments.map((comment, index) => (
            <div key={index} id="comment">
              {comment.content}
            </div>
          ))}
        </CommentList>
      </CommentSection>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-top: ${(props) => props.theme.borderTop};
`;

const CommentSection = styled.div`
  width: 100%;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.div`
  width: 70%;
  min-width: 200px;
  height: 100px;

  border: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderRadius};

  display: flex;
  justify-content: center;
  align-items: center;

  #input {
    width: 80%;
    height: 100%;
    padding: 20px;
    border-radius: ${(props) => props.theme.borderRadius};

    outline: none;
    border: none;
    resize: none;
  }

  #button {
    width: 55px;
    height: 30px;
    margin: 0 20px;

    background: linear-gradient(90deg, #2fca7f 0%, #54de3d 100%);
    border-radius: ${(props) => props.theme.borderRadius};

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme.white};
  }
`;

const CommentList = styled.div`
  width: 70%;
  min-width: 200px;
  padding: 20px 10px 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  #comment {
    margin: 5px;
    padding: 5px 10px;

    border: 1px solid #f1f1f1;
    border-radius: ${(props) => props.theme.borderRadius};

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${(props) => props.theme.black};
  }
`;

export default OpenMessage;
