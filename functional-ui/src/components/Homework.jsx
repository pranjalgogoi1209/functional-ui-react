import React from "react";
import styled from "styled-components";
import { UseFetch } from "../hooks/UseFetch";

export default function Homework() {
  const data = UseFetch("http://localhost:8000/data");
  const homework = data && data.homework;
  return (
    <Wrapper>
      <div className="Homework">
        <p>Homeworks</p>
        <ul>
          {homework &&
            homework.map(subject => <li key={subject}>{subject}</li>)}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .Homework {
    background-color: #dbdbdb;
    padding: 1rem;
    margin-left: 0.8rem;

    p {
      font-size: 1.5rem;
      text-align: center;
      font-weight: bold;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      flex-wrap: wrap;
      height: 14rem;
    }
    li {
      list-style-type: none;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: center;
      margin: 1rem 2rem;
      font-weight: bold;
    }
  }
`;
