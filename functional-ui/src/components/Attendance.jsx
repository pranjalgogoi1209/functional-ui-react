import React from "react";
import styled from "styled-components";
import { UseFetch } from "../hooks/UseFetch";

export default function Attendance() {
  const data = UseFetch("http://localhost:8000/data");
  // console.log(data && data.ATTENDANCE);
  const attendance = data && data.ATTENDANCE;
  // console.log(attendance);
  return (
    <Wrapper>
      <div className="Attendance">
        <p>ATTENDANCE</p>
        <div className="main">
          <ul className="ul-fn-an">
            <li>FN</li>
            <li>AN</li>
          </ul>
          {attendance &&
            Object.keys(attendance).map(item => (
              <ul key={item} className="ul-map">
                <li>{item}</li>
                <li className="date">{attendance[item].date}</li>
                <li
                  className="FN"
                  style={{
                    backgroundColor:
                      attendance[item].fn === "present" ? "#339933" : "#990000",
                  }}
                ></li>
                <li
                  className="AN"
                  style={{
                    backgroundColor:
                      attendance[item].an === "present" ? "#339933" : "#990000",
                  }}
                ></li>
              </ul>
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .Attendance {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    background-color: transparent;
    text-align: center;
  }
  p {
    font-size: 1.7rem;
    font-weight: bold;
  }
  .main {
    display: flex;
    justify-content: center;
    background-color: #dbdbdb;
    padding: 0 0 1.5rem 0;
    width: 70rem;

    ul {
      display: flex;
      flex-direction: column;

      li {
        text-transform: capitalize;
        list-style-type: none;
        margin: 0.4rem 5rem 0.4rem 0;
        font-weight: bold;
      }
    }

    .ul-fn-an {
      justify-content: flex-end;
      align-items: flex-end;
      li {
        margin: 0.9rem 0;
        font-size: 1.5rem;
      }
    }

    .ul-map {
      align-items: center;

      li {
        font-size: 1.7rem;
      }

      .date {
        font-size: 1rem;
      }

      .FN,
      .AN {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
