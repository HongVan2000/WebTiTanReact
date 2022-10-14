import React from "react";
import innovation from "../image/innovation.jpg";

class Innovations extends React.Component{
    constructor(props){
        super( props)
    }
     render(){
        return(
            <div>
                <div className="box box-2">
                    <h2>INNOVATIONS</h2>
                    <div className="items">
                    <div className="item">
                      <img src={innovation}></img>
                        <div className="content"><p>We always hunger for new idea creation by providing facilities for product development and an environment where creativity leverages our skills and services.</p></div>
                    </div>
                    </div>
                </div>
            </div>
        )
     }
   
}
export default Innovations