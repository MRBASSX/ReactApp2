import React from "react";
import "../static/css/App.css";

const sports = [
	{ id:1,name: "Football", icon: "⚽" },
	{ id:2,name: "Basketball", icon: "🏀" },
	{ id:3,name: "Tennis", icon: "🎾" },
	{ id:4,name: "Cricket", icon: "🏏" },
	{ id:5,name: "Baseball", icon: "⚾" },
	{ id:6,name: "Golf", icon: "⛳" },
];

const Footer = () => {
	return (
		<footer className="sports-footer" style={{
			background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
			color: "#fff",
			padding: "2rem 0 1rem 0",
			textAlign: "center",
			boxShadow: "0 -2px 10px rgba(30,60,114,0.2)",
			marginTop: "2rem"
		}}>
			<div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "1rem" }}>
				{sports.map((sport) => (<div key={sport.id} style={{ fontSize: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
						<span>{sport.icon}</span>
						<span style={{ fontSize: "1rem", marginTop: "0.5rem" }}>{sport.name}</span>
					</div>))}
			</div>
			<div style={{ fontSize: "1.1rem", opacity: 0.85 }}>
				&copy; {new Date().getFullYear()} SportsZone. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
