import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import INIT_EMOTIONS from "../constant/INIT_EMOTIONS";

function OpenMessage({ id }) {
  const [emotionsCount, setEmotionsCount] = useState(INIT_EMOTIONS);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(false);

  const postComment = async (id) => {
    await axios.post(process.env.REACT_APP_ECO_API + 181341 + "/comment", {
      content: commentInput,
    });
    setReload((reload) => !reload);
  };

  useEffect(() => {
    const loadComments = async (id) => {
      const { data } = await axios.get(
        process.env.REACT_APP_ECO_API + 181341 + "/comment"
      );

      const result = data.results;
      setComments(result);
    };

    const loadMessageDetails = async (id) => {
      const { data } = await axios.get(
        process.env.REACT_APP_ECO_API + 181341 + "/"
      );
      setEmotionsCount({
        sad_cnt: data.sad_cnt,
        angry_cnt: data.angry_cnt,
        surprise_cnt: data.surprise_cnt,
      });
    };

    loadMessageDetails(id);
    loadComments(id);
  }, [id, reload]);

  return (
    <Section>
      <EmotionSection>
        <Emotion>
          <div id="emoji">
            <img src="https://img.icons8.com/color/48/null/crying--v1.png" />
            <div id="emotion_num">{emotionsCount.sad_cnt}</div>
          </div>
          <div id="title">슬퍼요</div>
        </Emotion>
        <Emotion>
          <div id="emoji">
            <img src="https://img.icons8.com/color/48/null/angry--v1.png" />
            <div id="emotion_num">{emotionsCount.angry_cnt}</div>
          </div>
          <div id="title">화나요</div>
        </Emotion>
        <Emotion>
          <div id="emoji">
            <img src="https://img.icons8.com/color/48/null/surprised--v1.png" />
            <div id="emotion_num">{emotionsCount.surprise_cnt}</div>
          </div>
          <div id="title">놀라워요</div>
        </Emotion>
      </EmotionSection>
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
          {comments.map((comment) => (
            <div id="comment">{comment.content}</div>
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

const EmotionSection = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emotion = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  #emoji {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
  }

  #emoji img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }

  #emoji div {
    padding-left: 5px;
    font-size: 16px;
    color: ${(props) => props.theme.firstGray};
  }

  #title {
    font-size: 10px;
    text-align: center;
    color: ${(props) => props.theme.firstGray};
  }
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
  padding: 20px;

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
