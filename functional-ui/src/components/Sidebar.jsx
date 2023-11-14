import React from "react";
import styled from "styled-components";
import { IoIosHome } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { GiCctvCamera } from "react-icons/gi";
import { FaBook } from "react-icons/fa6";

export default function Sidebar({ sidebarOpen }) {
  return (
    <Wrapper>
      <div className={sidebarOpen ? "Sidebar" : "Sidebar sidebar-none"}>
        <div className="bar-element">
          <IoIosHome />
          <p>Summary Dashboard</p>
        </div>
        <div className="bar-element">
          <FiBarChart2 />
          <p>Attendance Tracking</p>
        </div>
        <div className="bar-element">
          <GiCctvCamera />
          <p>Behavioral Analytics</p>
        </div>
        <div className="bar-element">
          <FaBook />
          <p>
            Academic <br /> Performance Tracking
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .Sidebar {
    transform: translateX(0);
    transition: 300ms;
    width: 30rem;
    height: 110vh;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .bar-element {
      display: flex;
      justify-content: space-evenly;
      cursor: pointer;
      svg {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.8rem;
        transition: 50ms;
      }
      p:hover {
        transform: translateX(1rem);
      }
    }
    .bar-element:hover {
      color: #990000;
    }
  }
  .sidebar-none {
    transform: translateX(-100%);
    transition: 300ms;
  }
`;
