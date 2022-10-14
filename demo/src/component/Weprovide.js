import box1 from"../image/box1.png";
import box2 from"../image/box2.png";
import box3 from "../image/box3.png";
import React from "react";





class Weprovide extends React.Component{

    constructor(props) {
        super(props)
        
    }
    
    render() {
        return (
        <div className="weprovide">
            <div className="box box-1">
            <a href="#"><h2>WE PROVIDE</h2></a>
            <p>Professional and trusted services with cost-effective and exceptional expertise to deal with any complexities in scalable projects</p>
            <div className="items">
             <div className="item">
                <img src={box1}></img>
                <a href="#"><h3>SOFTWARE DEVELOPMENT</h3></a>
                <p>Develop software applications from business ideas to deployment, develop based on product definition, the initial designs, or develop modules with multiple teams for concurrent development thus reducing time to market.</p>
            </div>
            <div className="item">
                <img src={box2} ></img>
                <a href="#"><h3>MAINTENANCE AND SUPPORT</h3></a>
                <p>Maintain, enhance, and develop new features of existing software applications. We also provide services to migrate from the legacy systems to new technologies to help improve performance and add benefits to the client's businesses.</p>
            </div>
            <div className="item">
                <img src={box3}></img>
                <a href="#"><h3>SOFTWARE DEVELOPMENT</h3></a>
                <p>Develop software applications from business ideas to deployment, develop based on product definition, the initial designs, or develop modules with multiple teams for concurrent development thus reducing time to market.</p>
            </div>
            </div>
        </div>
          
       </div>
        )
    } 
}

export default Weprovide
 
 