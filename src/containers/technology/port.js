import React from 'react'
import { Header } from "../header";
import "../../styles/technology/technology.css";
import "../../styles/technology/port.css";
import assets from "../assets";
import { Link } from 'react-router-dom';
const Port = () => {
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
                                Spaceport
                            </h2>
                            <h4>
                                A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
                                by analogy to the seaport for ships or airport for aircraft. Based in the
                                famous Cape Canaveral, our spaceport is ideally situated to take advantage
                                of the Earth’s rotation for launch.
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
                            <img id="image_port" src={assets.technology.portLand} alt="port_Landscape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Port;