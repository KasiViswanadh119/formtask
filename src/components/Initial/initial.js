import React from "react";
import logo from "../../assets/chevronup.png";
import "./initial.css";

const Initial=()=>{
    return(
        <section className="initialform">
            <div className="firstline">
                <img src={logo} alt="up" className="logo"/>
                <p className="bpi">Booking Party Information</p>
                <p className="eam">(Enter as much as possible)</p>
            </div>
            <div className="secondline">
                <p className="uia">Use information on account?</p>
                <label class="switch">
                    <input type="checkbox" name="checkbox" id="checkbox" className="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>

        </section>
    )
}

export default Initial;