import React from 'react'
import { Header } from "../header";
import "../../styles/destination/destination.css";
import assets from "../assets";
import { Link } from 'react-router-dom';
const Titan = () => {
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
                        <img src={assets.destination.titan} alt="titan" />
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
                        <h1>Titan</h1>
                        <h4 id="description_text">
                            The only moon known to have a dense atmosphere other than Earth, Titan
                            is a home away from home (just a few hundred degrees colder!). As a
                            bonus, you get striking views of the Rings of Saturn.
                        </h4>
                        <hr />
                        <div className="container_destination_content_right_description_specifications">
                            <div>
                                <h4 className="container_destination_content_right_description_specifications_measurement">
                                    Avg. distance
                                </h4>
                                <h2>
                                    1.6 bil. km
                                </h2>
                            </div>
                            <div>
                                <h4 className="container_destination_content_right_description_specifications_measurement">
                                    Est. travel time
                                </h4>
                                <h2>
                                    7 years
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Titan;