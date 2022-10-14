import React  from "react";
import blogs1 from "../image/blogs1.jpg";
import blogs2 from "../image/blogs2.jpg";
import blogs3 from "../image/blogs3.jpg";


 class Bogs extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="blogs">
                    <a href="#"><h2> BLOGS</h2></a>
                <div className="blogs-content">
                    <div className="blogs-content-1">
                        <img src={blogs1}></img>
                        <a href="#"><h3> 5 Tech Trends in Healthcare and Medical App Development</h3></a>
                        <p>By Admin - 10/06/2021
                            There are many medical apps on the market; every day there are more and more healthcare startups. If you decide to create a medical app, you need to think outside the box and you need to....</p>
                    </div>
                    <div className="blogs-content-2">
                        <img src={blogs2}></img>
                        <a href="#"><h3>A developer’s tale of deadlines and fantasy time esti</h3></a>
                        <p>You were asked to write a program, and during the discovery phase of the discussions, you were asked how long it was going to take.</p>

                    </div>
                    <div className="blogs-content-3">
                        <img src={blogs3}></img>
                        <a href="#"><h3>A Practical Guide to Better Code Reviews</h3></a>
                        <p>A CODE REVIEW is a part of the development process in which a developer and their colleagues work together and look for bugs within some code.</p>
                    </div>
                </div>
            </div>
        )
    }
 }
 export default Bogs