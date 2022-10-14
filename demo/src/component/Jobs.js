import React from "react";
import jobs from "../image/jobs.jpg";

 class Jobs extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="jobs">
                <a href="#"><h2>Latest Jobs</h2></a>
                <div className="jobs-content">
                    <div className="jobs-img">
                        <img src={jobs}></img>
                    </div>
                    <div className="jobs-content-right">
                        <h3>Titan Technology Corporation is the place where we care about individuals. We offer a friendly, challenging, and collaborative home, where every staff is well-treated, enjoy valuable benefits and willing to share ownership with us.</h3>
                        <button className="btn-join-us">JOIN-US</button>
                    </div>
                </div>
            </div>
        )
    }
 }
 export default Jobs