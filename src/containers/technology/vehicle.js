import React from 'react'
import { Header } from "../header";
import "../../styles/technology/technology.css";
import "../../styles/technology/vehicle.css";
import assets from "../assets";
import { Link } from 'react-router-dom';
const Technology = () => {
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
                                Launch vehicle
                            </h2>
                            <h4>
                                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                                payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                                it's quite an awe-inspiring sight on the launch pad!
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
                            <img id="image_vehicle" src={assets.technology.vehicleLand} alt="vehicle_landscape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Technology;