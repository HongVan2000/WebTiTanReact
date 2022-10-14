import React from "react";
import new1 from "../image/new1.jpeg";
import new2 from "../image/new2.png";
import new3 from "../image/new3.jpeg";

class News extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="news">
            <a href="#"><h2> News & Events</h2></a>
           <div className="new-content">
            <div className="new-content-1">
                <img src={new1}></img>
                <a href="#"><h3>2020 Tax Compliance Awards</h3></a>
                <p>Titan Technology Corporation won the “2020 Tax Compliance Excellence Award” and the “2020 Taxation Responsibility Fulfillment Excellence Awa… ...</p>
            </div>
            <div className="new-content-2">
                <img src={new2}></img>
                <a href="#"><h3>WELCOMING THE YEAR OF THE TIGER</h3></a>
                <p>Tiger is a confident, enthusiastic, courageous, and competitive animal. 2022 is the Year of the Tiger. Titan Technology wishes you a new yea… ...</p>
    
            </div>
            <div className="new-content-3">
                <img src={new3}></img>
                <a href="#"><h3>CHARITABLE GIVING IN CELEBRATION OF THE YEAR OF TIGER</h3></a>
                <p>Lunar New Year is almost upon us. Family, friends, and spreading goodwill and cheer are what the holidays really mean. Being a socially cons. ...</p>
            </div>
           </div>
    
        </div>
        )
    }
}
export default News