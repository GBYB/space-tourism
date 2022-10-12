import React from 'react'
import { Header } from "./header";
import "./../styles/index/index.css"
import { Link } from 'react-router-dom';
const Home = () => {
    // let home = window.matchMedia("(min-width: 540px)");
    // if (home) {
    //     let node = document.querySelector(".home");
    //     node.style.borderBottom = "#fff 2px solid!important";
    // }
    return (
        <div className="container_home">
            <Header />
            <div className="container_home_content">
                <div className="container_home_description">
                    <h3>
                        So, you want to travel to
                    </h3>
                    <h1>
                        Space
                    </h1>
                    <h4>
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </h4>

                </div>

                <div className="container_home_btn-container">
                    <Link to="/moon">
                        <button id="discover">
                            Explore
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    )
}
export default Home;