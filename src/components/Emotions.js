import styled from "styled-components";
import { useEffect, useState } from "react";
import INIT_EMOTIONS from "../constant/INIT_EMOTIONS";
import axios from "axios";

function Emotions({ id, reload, setReload }) {
  const [emotionsCount, setEmotionsCount] = useState(INIT_EMOTIONS);

  const loadEmotions = async (id) => {
    const { data } = await axios.get(
      process.env.REACT_APP_ECO_API + 181341 + "/"
    );
    setEmotionsCount({
      sad_cnt: data.sad_cnt,
      angry_cnt: data.angry_cnt,
      surprise_cnt: data.surprise_cnt,
    });
  };
  useEffect(() => {
    loadEmotions(id);
  }, [id, reload]);

  return (
    <Section>
      <Emotion>
        <div id="emoji">
          <img src="https://img.icons8.com/color/48/null/crying--v1.png" />
          <div id="emotion_num">{emotionsCount.sad_cnt}</div>
        </div>
        <div id="title">슬퍼요</div>
      </Emotion>
      <Emotions>
        <div id="emoji">
          <img src="https://img.icons8.com/color/48/null/angry--v1.png" />
          <div id="emotion_num">{emotionsCount.angry_cnt}</div>
        </div>
        <div id="title">화나요</div>
      </Emotions>
      <Emotions>
        <div id="emoji">
          <img src="https://img.icons8.com/color/48/null/surprised--v1.png" />
          <div id="emotion_num">{emotionsCount.surprise_cnt}</div>
        </div>
        <div id="title">놀라워요</div>
      </Emotions>
    </Section>
  );
}

const Section = styled.div`
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

export default Emotions;
