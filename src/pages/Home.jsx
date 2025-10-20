import { useContext, useState } from 'react'
import { Box } from "../components/Box";
import { ThemeContext } from '../App.jsx';
import { UserContext } from '../App.jsx';
import { DashboardContext } from '../App.jsx';








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


    const {User,toggleTheme} = useContext(UserContext);

    const theme = useContext(ThemeContext);

    const dash = useContext(DashboardContext);

    const MyF = (ttt) => {


       return(
        Info.map((out)=>(
        <div key={out.id}>
            <h1>hello{out.name}</h1>
        </div>
    ))
       )

    }

    const Info = [
        
        {
            name:"Dan",
            id:2
        },
        {
            name:"James",
            id:3
        },

    ]

   

    return (


        <div style={{ fontFamily: "Arial, sans-serif", background: User == 'light' ? '#fff':'#333', minHeight: "100vh" }}>
            <header style={{ padding: "2rem 0", textAlign: "center", background: "#273c75", color: "#fff" }}>
                <h1 >Sports Hub {theme}</h1>
                <p>Discover your favorite sports, latest news, and upcoming events!</p>
            </header>
            <h1><MyF/></h1>
            <Box MyFunct={MyF} bottom={"test2"} />
            <h1>Username:{User}</h1>
            <button onClick={toggleTheme}>Swap</button>
            <h1>Name:{dash}</h1>
            


        </div>
    );
}