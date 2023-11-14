import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { UseFetch } from "../hooks/UseFetch";

export default function BehavioralAnalytics() {
  const data = UseFetch("http://localhost:8000/data");
  const ba = data && data["Behavioral Analytics"];

  return (
    <Wrapper>
      <div className="BehavioralAnalytics">
        <p>Behavioral Analytics</p>
        <Chart
          className="chart"
          type="pie"
          width={300}
          height={300}
          series={[392, 795]}
          options={{
            labels: ["GOOD", "BAD"],
          }}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .BehavioralAnalytics {
    width: 40rem;
    background-color: #dbdbdb;
    padding: 1rem;
    margin-right: 0.8rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
  }

  .chart {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;
