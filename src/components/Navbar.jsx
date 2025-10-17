import React, { useContext, useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import ThemeContext from '../App'






const navItems = [
  { name: "Home", link: "/" },
  { name: "Teams", link: "/teams" },
  { name: "Fixtures", link: "/fixtures" },
  { name: "Results", link: "/results" },
  { name: "News", link: "/news" },
  { name: "Help", link: "/help" },
  { name: "Contact", link: "/contact" },
   { name: "Counter", link: "/count" },
   { name: "Register Form", link: "/registerform" },
];






const Navbar = () => {


  const value = useContext(ThemeContext);

 

  return (







  <nav style={{
    background: "linear-gradient(90deg, #0f2027, #2c5364)",
    padding: "0.5rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }}>
    <div style={{
      fontWeight: "bold",
      fontSize: "1.5rem",
      color: "#fff",
      letterSpacing: "2px"
    }}>
      SportsZone
    </div>
    <ul style={{
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
      gap: "2rem"
    }}>
      {navItems.map(item => (
        <li key={item.name}>
          <a
            href={item.link}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              transition: "background 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#1e3c72"}
            onMouseOut={e => e.currentTarget.style.background = "transparent"}
          >
            {item.name + value} 
          </a>
        </li>
      ))}
    </ul>

   

   
  </nav>
);
}

export default Navbar;