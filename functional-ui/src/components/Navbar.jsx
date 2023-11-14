import React from "react";
import styled from "styled-components";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";

export default function Navbar({ setSidebarOpen }) {
  return (
    <Wrapper>
      <div className="Navbar">
        <div className="sidebar">
          <HiOutlineBars3BottomLeft
            onClick={() => setSidebarOpen(prev => !prev)}
          />
        </div>
        <div className="user">
          <FaUserAlt />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .Navbar {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.5rem;
    background-color: #536a53;
    padding: 0.5rem 0.6rem 0 0.6rem;
    svg {
      cursor: pointer;
    }
  }
`;
