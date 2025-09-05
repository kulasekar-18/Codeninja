import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => setDropdownOpen(null);

  // Close on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeMenu();
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <Nav ref={navRef}>
      {/* Logo */}
      <Logo>
        <NavLink to="/">CodeNinja</NavLink>
      </Logo>

      {/* Center Menus */}
      <NavList>
        {/* Job Bootcamp */}
        <NavItem>
          <ToggleLink type="button" onClick={() => toggleDropdown("bootcamp")}>
            Job Bootcamp <FaChevronDown size={12} />
          </ToggleLink>
          <MegaDropdown open={dropdownOpen === "bootcamp"}>
            <Card>
              <h3>Job Bootcamp for Professionals</h3>
              <NavLink to="/job-bootcamp" onClick={closeMenu}>
                <p>Web Development Bootcamp (MERN & Springboot)</p>
              </NavLink>
              <NavLink to="/job-bootcamp" onClick={closeMenu}>
                <p>Data Analytics Job Bootcamp</p>
              </NavLink>
            </Card>
          </MegaDropdown>
        </NavItem>

        {/* IIT Certifications */}
        <NavItem>
          <ToggleLink type="button" onClick={() => toggleDropdown("certs")}>
            IIT Certifications <FaChevronDown size={12} />
          </ToggleLink>
          <MegaDropdown open={dropdownOpen === "certs"}>
            <Card>
              <h3>For Graduates</h3>
              <NavLink to="/professional-certificates" onClick={closeMenu}>
                <p>PG Certification in Data Analytics – IIT Guwahati</p>
              </NavLink>
              <NavLink to="/professional-certificates" onClick={closeMenu}>
                <p>PG Certification in Data Science – IIT Guwahati</p>
              </NavLink>
              <NavLink to="/iit-certifications" onClick={closeMenu}>
                <p>Generative AI for Non-Tech Professionals – IIT Madras</p>
              </NavLink>
            </Card>

            <Card>
              <h3>For College Students</h3>
              <NavLink to="/student-certificates" onClick={closeMenu}>
                <p>Data Analytics – IIT Guwahati</p>
              </NavLink>
              <NavLink to="/student-certificates" onClick={closeMenu}>
                <p>Advanced DSA – IIT Madras</p>
              </NavLink>
              <NavLink to="/student-certificates" onClick={closeMenu}>
                <p>Full Stack Web Dev + GenAI + DSA – IIT Madras</p>
              </NavLink>
            </Card>
          </MegaDropdown>
        </NavItem>

        {/* New Launches */}
        <NavItem>
          <ToggleLink type="button" onClick={() => toggleDropdown("launches")}>
            New Launches <FaChevronDown size={12} />
          </ToggleLink>
          <MegaDropdown open={dropdownOpen === "launches"}>
            <Card>
              <h3>Latest Program</h3>
              <NavLink to="/new-launches" onClick={closeMenu}>
                <p>Advanced Certification in GenAI & Multi-Agent Systems</p>
              </NavLink>
            </Card>
          </MegaDropdown>
        </NavItem>
      </NavList>

      {/* Right: Login */}
      <AuthSection>
        <NavLink to="/login" onClick={closeMenu}>
          <LoginButton>Login</LoginButton>
        </NavLink>
      </AuthSection>
    </Nav>
  );
};

/* ---------------- Styled Components ---------------- */

const Nav = styled.nav`
  background: #0d1b2a;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  a {
    color: #00b4d8;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
`;

const ToggleLink = styled.button`
  background: transparent;
  border: 0;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px 0;
  &:hover {
    color: #00b4d8;
  }
`;

const MegaDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(p) => (p.open ? "flex" : "none")};
  gap: 28px;
  background: #ffffff;
  padding: 18px 20px;
  min-width: 320px;
  box-shadow: 0 8px 24px rgba(2, 14, 22, 0.25);
  border-radius: 10px;
  z-index: 100;
`;

const Card = styled.div`
  min-width: 240px;
  h3 {
    margin: 0 0 10px;
    font-size: 15px;
    font-weight: 700;
    color: #0d1b2a;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 6px 0;
    color: #333;
    font-size: 14px;
  }
  p:hover {
    color: #00b4d8;
  }
`;

const AuthSection = styled.div``;

const LoginButton = styled.button`
  background: transparent;
  border: 1px solid #00b4d8;
  color: #00b4d8;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;
  &:hover {
    background: #00b4d8;
    color: white;
  }
`;

export default Navbar;