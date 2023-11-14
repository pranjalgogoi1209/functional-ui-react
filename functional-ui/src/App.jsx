import React from "react";
import styled from "styled-components";
import { useState } from "react";

import Attendance from "./components/Attendance";
import Homework from "./components/Homework";
import BehavioralAnalytics from "./components/BehavioralAnalytics";
import { UseFetch } from "./hooks/UseFetch";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  const data = UseFetch("http://localhost:8000/data");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);
  return (
    <Wrapper>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <div className="Sidebar">
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>
      <div className="App">
        {data && <p className="para">HELLO! {data.NAME}</p>}
        <Attendance />
        <div className="hb">
          <Homework />
          <BehavioralAnalytics />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .App {
    z-index: 1;
  }
  .Sidebar {
    z-index: 2;
    position: absolute;
    background-color: white;
  }
  background-color: #f0f0f0;
  .para {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 2rem 2rem 2rem 2.7rem;
  }
  .hb {
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
`;
