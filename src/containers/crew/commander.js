import React from 'react'
import { Header } from "../header";
import "../../styles/crew/crew.css";
import assets from "../assets";
import { Link } from 'react-router-dom';
const Commander = () => {
    return (
        <div className="container_crew">
            <Header />
            <div className="container_crew_content">
                <div className="container_crew_content_title">
                    <h3>02</h3>
                    <h3>
                        Meet your crew
                    </h3>
                </div>
                <div className="container_crew_content_display">
                    <div className="container_crew_content_display_left">
                        <div className="container_crew_content_display_left_description">
                            <h3 className="role">
                                Commander
                            </h3>
                            <h2>
                                Douglas Hurley
                            </h2>
                            <h4>
                                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                                and former NASA astronaut. He launched into space for the third time as
                                commander of Crew Dragon Demo-2.
                            </h4>
                        </div>
                        <div className="container_crew_content_display_left_crew_nav">
                            <hr />
                            <div className="container_crew_content_display_left_crew_nav_slider">
                                <Link to="/commander" className="container_crew_content_display_left_crew_nav_slider_circle" id="douglas"></Link>
                                <Link to="/specialist" className="container_crew_content_display_left_crew_nav_slider_circle" id="mark"></Link>
                                <Link to="/pilot" className="container_crew_content_display_left_crew_nav_slider_circle" id="victor"></Link>
                                <Link to="/engineer" className="container_crew_content_display_left_crew_nav_slider_circle" id="anoush"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container_crew_content_display_right">
                        <div className="container_crew_content_display_right_image">
                            <img src={assets.crew.douglas} alt="douglas" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Commander;