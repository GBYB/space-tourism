
import React from 'react';
import "../styles/header/header.css";
import assets from "./assets.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export const Header = () => {
    const bar = () => {
        let node = document.getElementById('bar');
        node.addEventListener('click', () => {
            let side = document.getElementsByClassName("sidebar")[0];
            side.style.display = "block";
            let bar = document.getElementById('bar');
            bar.style.display = "none";

        });
        let bar_closed = document.getElementsByClassName('close')[0];
        bar_closed.addEventListener('click', () => {
            console.log("closed");
            let side = document.getElementsByClassName("sidebar")[0];
            side.style.display = "none";
            let bar = document.getElementById('bar');
            bar.style.display = "block";
        });
    }

    window.onresize = () => {
        let side = document.getElementsByClassName("sidebar")[0];

        if (side.style.display === "block") {
            side.style.display = "none";
            let bar = document.getElementById('bar');
            bar.style.display = "block";
        }
    }
    // const nav = useNavigate();

    // const navigate = (destination) => {
    //     if (destination === "home")
    //         nav("/", { replace: true });
    //     else if (destination === "destination")
    //         nav("/destination", { replace: true });
    //     else if (destination === "crew")
    //         nav("/crew", { replace: true });
    //     else if (destination === "technology")
    //         nav("/technology", { replace: true });
    // }

    return (
        <div>
            <div className="header">
                <div className="header__mobile">
                    <img src={assets.shared.logo} id="logo" alt="logo" />
                    <div onClick={bar}>
                        <img src={assets.shared.bar} id="bar" alt="bar" />
                    </div>
                </div>
                <div className=" header__tablet">
                    <img src={assets.shared.logo} alt="logo" />
                    {/* <div className="navbar">
                        <button className="home">
                            Home
                        </button>
                        <button onClick={navigate("destination")} className="destination">
                            Destination
                        </button>
                        <button className="crew">
                            Crew
                        </button>
                        <button className="technology">
                            Technology
                        </button>

                    </div> */}
                    <div className="navbar">
                        <Link to="/" className="home">
                            Home
                        </Link>
                        <Link to="/moon" className="destination">
                            Destination
                        </Link>
                        <Link to="/commander" className="crew">
                            Crew
                        </Link>
                        <Link to="/vehicle" className="technology">
                            Technology
                        </Link>

                    </div>
                </div>
                <div className="header__desktop">
                    <img src={assets.shared.logo} alt="logo" />
                    <div className="line"></div>
                    {/* <div className="navbar">
                        <button className="home">
                            <strong>
                                00
                            </strong>Home
                        </button>
                        <button className="destination">
                            <strong>
                                01
                            </strong> Destination
                        </button>
                        <button className="crew">
                            <strong>
                                02
                            </strong>Crew
                        </button>
                        <button className="technology">
                            <strong>
                                03
                            </strong>Technology
                        </button>
                    </div> */}
                    <div className="navbar">
                        <Link to="/" className="home">
                            <strong>
                                00
                            </strong> Home
                        </Link>
                        <Link to="/moon" className="destination">
                            <strong>
                                01
                            </strong> Destination
                        </Link>
                        <Link to="/commander" className="crew">
                            <strong>
                                02
                            </strong> Crew
                        </Link>
                        <Link to="/vehicle" className="technology">
                            <strong>
                                03
                            </strong> Technology
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="close-container">
                    <div className="close">
                        <img src={assets.shared.close} alt="close" />
                    </div>
                </div>
                {/* 
                <div className="sidebar__content">
                    <button className="home">
                        <strong>
                            00
                        </strong>Home
                    </button>
                    <button className="destination">
                        <strong>
                            01
                        </strong> Destination
                    </button>

                    <button className="crew">
                        <strong>
                            02
                        </strong>Crew
                    </button>

                    <button className="technology">
                        <strong>
                            03
                        </strong>Technology
                    </button>
                </div> */}

                <div className="sidebar__content">
                    <Link to="/" className="home">
                        <strong>
                            00
                        </strong> Home
                    </Link>
                    <Link to="/moon" className="destination">
                        <strong>
                            01
                        </strong> Destination
                    </Link>

                    <Link to="/commander" className="crew">
                        <strong>
                            02
                        </strong> Crew
                    </Link>

                    <Link to="/vehicle" className="technology">
                        <strong>
                            03
                        </strong> Technology
                    </Link>
                </div>
            </div>
        </div >
    )
}
