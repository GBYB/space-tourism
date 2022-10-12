import React from 'react'
import { Header } from "../header";
import "../../styles/crew/crew.css";
import assets from "../assets";
import { Link } from 'react-router-dom';
const Pilot = () => {
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
                                Pilot
                            </h3>
                            <h2>
                                Victor Glover
                            </h2>
                            <h4>
                                Pilot on the first operational flight of the SpaceX Crew Dragon to the
                                International Space Station. Glover is a commander in the U.S. Navy where
                                he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
                                station systems flight engineer.
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
                            <img src={assets.crew.victor} alt="victor" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Pilot;