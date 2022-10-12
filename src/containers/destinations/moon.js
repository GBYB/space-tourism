import React from 'react'
import { Header } from "../header";
import "../../styles/destination/destination.css";
import assets from "../assets";
import { Link } from 'react-router-dom';
const Moon = () => {
    return (
        <div className="container_destination">
            <Header />
            <div className="container_destination_content">
                <div className="container_destination_content_left">
                    <div className="container_destination_content_left_title">
                        <h3>01</h3>
                        <h3>
                            Pick your destination
                        </h3>
                    </div>
                    <div className="container_destination_content_left_image">
                        <img src={assets.destination.moon} alt="moon" />
                    </div>
                </div>
                <div className="container_destination_content_right">
                    <div className="container_destination_content_right_destination_nav">
                        <Link to="/moon" id="moon" className="container_destination_content_right_destination_nav_link">
                            Moon
                        </Link>
                        <Link to="/mars" id="mars" className="container_destination_content_right_destination_nav_link">
                            Mars
                        </Link>
                        <Link to="/europa" id="europa" className="container_destination_content_right_destination_nav_link">
                            Europa
                        </Link>
                        <Link to="/titan" id="titan" className="container_destination_content_right_destination_nav_link">
                            Titan
                        </Link>

                    </div>
                    <div className="container_destination_content_right_description">
                        <h1>Moon</h1>
                        <h4 id="description_text">
                            See our planet as you’ve never seen it
                            before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there,
                            take
                            in
                            some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </h4>
                        <hr />
                        <div className="container_destination_content_right_description_specifications">
                            <div>
                                <h4 className="container_destination_content_right_description_specifications_measurement">
                                    Avg. distance
                                </h4>
                                <h2>
                                    384,400 km
                                </h2>
                            </div>
                            <div>
                                <h4 className="container_destination_content_right_description_specifications_measurement">
                                    Est. travel time
                                </h4>
                                <h2>
                                    3 days
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Moon;