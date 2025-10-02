import React from "react";
import Box from "../components/Box";

const Shoes = [
    {
        name: "Football",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        description: "Experience the thrill of football with live matches, news, and player stats.",
    },
    {
        name: "Basketball",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
        description: "Stay updated with the latest basketball games, scores, and highlights.",
    },
    {
        name: "Tennis",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        description: "Follow grand slam tournaments, rankings, and tennis news.",
    },
    {
        name: "Running",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
        description: "Join the running community, track events, and training tips.",
    },
];


const Shirt = [
    {
        name: "Football",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        description: "Experience the thrill of football with live matches, news, and player stats.",
    },
    {
        name: "Basketball",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
        description: "Stay updated with the latest basketball games, scores, and highlights.",
    },
    {
        name: "Tennis",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        description: "Follow grand slam tournaments, rankings, and tennis news.",
    },
    {
        name: "Running",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
        description: "Join the running community, track events, and training tips.",
    },
];
export default function Home() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f6fa", minHeight: "100vh" }}>
            <header style={{ padding: "2rem 0", textAlign: "center", background: "#273c75", color: "#fff" }}>
                <h1>Sports Hub</h1>
                <p>Discover your favorite sports, latest news, and upcoming events!</p>
            </header>

           <Box sports={Shoes}/>
             <Box sports={Shirt}/>
               <Box sports={Shirt}/>
                 <Box sports={Shirt}/>
        </div>
    );
}