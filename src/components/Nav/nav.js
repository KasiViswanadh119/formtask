import React from "react";
import './nav.css';
const Nav=()=>{
    return(
        <nav className="navbar">
            <div className="circles">
                <div>
                    <div className="circleone">
                        <p className="circletext">1</p>
                    </div>
                    <div>
                        <p className="underone">Initial Information</p>
                    </div>
                </div>
                <div>
                    <div className="circletwo">
                        <p className="circletext">2</p>
                    </div>
                    <div>
                        <p className="underone">Party Information</p>
                    </div>
                </div>
                <div>
                    <div className="circlethree">
                        <p className="circletext">3</p>
                    </div>
                    <div>
                        <p className="underthird">Logistics</p>
                    </div>
                </div>
                <div>
                    <div className="circlefour">
                        <p className="circletext">4</p>
                    </div>
                    <div>
                        <p className="underone">Additional Information</p>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Nav;