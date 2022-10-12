import React from 'react'
import { Header } from "../header";
import "../../styles/technology/technology.css";
import "../../styles/technology/capsule.css";
import assets from "../assets";
import { Link } from 'react-router-dom';
const Capsule = () => {
    return (
        <div className="container_technology">
            <Header />
            <div className="container_technology_content">
                <div className="container_technology_content_title">
                    <h3>03</h3>
                    <h3>
                        Space launch 101
                    </h3>
                </div>
                <div className="container_technology_content_display">
                    <div className="container_technology_content_display_left">
                        <div className="container_technology_content_display_left_description">
                            <h3 className="role">
                                The terminology...
                            </h3>
                            <h2>
                                Space capsule
                            </h2>
                            <h4>
                                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
                                capsule to reenter the Earth's atmosphere without wings. Our capsule is where
                                you'll spend your time during the flight. It includes a space gym, cinema,
                                and plenty of other activities to keep you entertained.
                            </h4>
                        </div>
                        <div className="container_technology_content_display_left_tech_nav">
                            <Link to="/vehicle" className="container_technology_content_display_left_tech_nav_btn" id="vehicle">1</Link>
                            <Link to="/port" className="container_technology_content_display_left_tech_nav_btn" id="port">2</Link>
                            <Link to="/capsule" className="container_technology_content_display_left_tech_nav_btn" id="capsule">3</Link>
                        </div>
                    </div>

                    <div className="container_technology_content_display_right">
                        <div className="container_technology_content_display_right_image">
                            <img id="image_capsule" src={assets.technology.capsuleLand} alt="capsule_landscape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Capsule;