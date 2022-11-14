import React from 'react';
import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";

export const Cbox = styled.div`
    width: 750px;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 3px 3px 10px #C9C9C9;
    margin: auto; 
    margin-top: 30px;
    background-color: #FFFFFF;
    font-family: 'Noto Sans KR', sans-serif;
`;

export const Ctitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 25px 10px 12px 40px;
    display: inline-block;
`;

export const Ctype = styled.div`
    font-size: 15px;
    color:#777777;
    display: inline-block;
`;

export const Ctext = styled.div`
    font-size: 17px;
    margin: 0 40px 15px 40px;
    text-align: justify;
    line-height: 140%;
    height: 100px;
    overflow: hidden;
`;

export const Cbot = styled.div`
    height: 32px;
    border-top: 2px solid #F1F1F1;
    line-height: 28px;
`;

export const Cnum = styled.div`
    color: #969696;
    font-size: 12px;
    float: left;
    margin-left: 15px;
    display: flex;
    align-items: center;
`;

export const Ctime = styled.div`
    color: #969696;
    font-size: 12px;
    float:right;
    margin-right: 15px;
`;


function Comment() {
    return (
        <Cbox>
            <>
            <Ctitle>안개주의보 발표에 따른 재난예방활동 철저 및 추진실적 제출</Ctitle>
            <Ctype>안개</Ctype>
            </>
            <>
            <Ctext>
                11월10일 21시30분을 기해&nbsp;전라남도(화순군), 충청남도(서천군, 청양군, 부여군, 아산시, 공주시)&nbsp; 지역에 안개주의보가 발효되었으니 해당 지자체 및 관계기관에서는 안개로 인한 피해가 없도록 아래사항을 유념하여 안전사고 등 예방대책에 만전을 기하여 주시기 바라며, 시·도에서는 안개주의보에 따른 교통안전대책 추진실적을 붙임2 서식에 따라 명일 07시까지 제출하여 주시기 바랍니다
            </Ctext>
            </>
            <Cbot>
                <Cnum>
                    <AiOutlineComment size='18'/>&nbsp;
                    12
                </Cnum>
                <Ctime>2015/11/10 21:34:02:843</Ctime>
            </Cbot>
        </Cbox>
    );
}

export default Comment;
