import React from "react";
import styled from "styled-components";

export const CrudCont = ({ counters }) => {

  return (
    <ContContainer className="d-flex gap-3 justify-content-end">
      <div className="counter">
        <div className="nums">{counters.Finished}</div>
        <div>Finshed</div>
      </div>
      <div className="counter">
        <div className="nums">{counters.Reading}</div>
        <div>Reading</div>
      </div>
      <div className="counter">
        <div className="nums">{counters.toRead}</div>
        <div>To Read</div>
      </div>
    </ContContainer>
  );
};

const ContContainer = styled.div`
    position: relative;
    top: 1rem;
    right: 2rem;
    .counter {
      
      .nums {
        font-weight: bold;
        font-size: 2rem;
        color: #212529;
        background-color: #c4c4c3 !important;
      color: #212529;
      font-weight: 700;
      font-size: 30px;
      border-radius: 1rem;
      width: 50px;
      height: 50px;
      margin: 5px;
      }
    }
`;