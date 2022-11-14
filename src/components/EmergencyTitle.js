import styled from "styled-components";

function EmergencyTitle({title, type}){
  return (
    <Ctitle>
      <div className="title">{title}</div>
      <div className="type">{type}</div>
    </Ctitle>
  )
}

export const Ctitle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;

  .title {
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
  }
  
  .type {
    padding-left: 10px;
    font-size: 15px;
    color:#777777;
    display: inline-block;
  }
`;

export default EmergencyTitle;
