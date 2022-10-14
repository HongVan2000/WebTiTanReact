import React from "react";
import customer1 from "../image/customer1.png";
import customer2 from "../image/customer2.png";
import customer3 from "../image/customer3.png";
import customer4 from "../image/customer4.png";
import customer5 from "../image/customer5.png";
import customer6 from "../image/customer6.png";
import back from "../image/back.png";
import next from "../image/next.png";


class Customer extends React.Component{
    constructor( props){
        super( props)
        this.boxSlider3ItemCount = 6
        this.currentboxSlider3Item = 1
        this.nextboxSlider3=this.nextboxSlider3.bind(this)
    }
      Load(){
      
        let boxSlider3Elm = document.getElementById("slider-item-4")
        if (boxSlider3Elm) {
          boxSlider3Elm.style.width = (this.boxSlider3ItemWidth * this.boxSlider3ItemCount) + "px"
        }
        
      }
      

    nextboxSlider3 () {
  
      let i;
        if (this.currentboxSlider3Item === this.boxSlider3ItemCount) {
          this.currentboxSlider3Item = 1
        } else {
          this.currentboxSlider3Item++
        }
      
        let LeftPositions = (this.currentboxSlider3Item - 1) * this.boxSlider3ItemWidth
        let boxSlider3Element = document.getElementById("slider-item-4")
        let dots = document.getElementsByClassName("radius");
        
        if (boxSlider3Element) {
          if (this.currentboxSlider3Item === 1) {
            boxSlider3Element.style.left = "0"
          } else {
            boxSlider3Element.style.left = "-" + LeftPositions + "px"
          }
        }
        for (i = 0; i < dots.boxSlider3ItemWidth; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
          dots[this.boxSlider3ItemCount-1].className += " active";
      }
      componentDidMount() {
        window.addEventListener("Load", this.Load())
        this.boxSlider3ItemWidth = document.getElementById("box-slider-1").clientWidth 
        this.SliderInterval = setInterval(this.nextboxSlider3, 5000);
        
        
       }
   
       componentWillUnmount() {
   
       }
    render(){
        return(
            <div className="Full-box-1 full-box-slider">
                <div className="box-slider" id="box-slider-1">
                    <a href="#"><h2>Customer testimonials</h2></a>
                    <p className="title">We deeply appreciate all feedbacks from our customers and keep those as realistic results of high-quality service in Titan</p>
                    <div className="items">
                        <div className="slider-item" id="slider-item-4">
                                <div className="item">
                                    <img src={customer1}></img>
                                    <h2>Dr. Tim Parker</h2>
                                    <h3>Chief Technical Officer</h3>
                                    <p>“We have worked with Titan Technology for the last three years on a complex and evolving software product.   ...”</p>

                                </div>
                                <div className="item">
                                    <img src={customer2}></img>
                                    <h2>THOMAS SANTONJA</h2>
                                    <h3>Director of Application Development</h3>
                                    <p>“A professional and dedicated team with a spirit of delivery. Successfully worked along us for delivery of years of features.”</p>
                                    
                                </div>
                                <div className="item">
                                    <img src={customer3}></img>
                                    <h2>VALERY KHVATOV</h2>
                                    <h3>VP of Technology</h3>
                                    <p>“The work of Titan Technology is distinguished by high professionalism and initiative...</p>
                                    
                                </div>
                                <div className="item">
                                    <img src={customer4}></img>
                                    <h2>HONGWEN ZHANG, PH.D</h2>
                                    <h3>CEO & CTO (co-founder)</h3>
                                    <p>“Wedge Networks Inc, based in Canada, is a leader in Real-time Threat Prevention for the cloud networks....</p>
                                    
                                </div>
                                <div className="item">
                                    <img src={customer5}></img>
                                    <h2>CHRIS HENNIGFELD</h2>
                                    <h3>Project Manager</h3>
                                    <p>“We greatly appreciate the reliable and cost-effective team Titan has provided to us to develop and maintain one of our sys...”</p>
                                </div>
                                <div className="item">
                                   <img src={customer6}></img>
                                    <h2>STEPHEN COLE</h2>
                                    <h3>CEO</h3>
                                    <p>“In these challenging times, I wanted to say thank you for the outstanding effort and service we have experienced with Titan...</p> 
                                </div>



                        </div>
                    </div>
                        
                    
                </div>

                <div className="box-radius">
                    <span className="radius" onClick={this.nextboxSlider3}></span>
                    <span className="radius" onClick={this.nextboxSlider3}></span>
                    <span className="radius" onClick={this.nextboxSlider3}></span>
                    <span className="radius" onClick={this.nextboxSlider3}></span>
                    <span className="radius" onClick={this.nextboxSlider3}></span>
                    <span className="radius" onClick={this.nextboxSlider3}></span>
                    {/* <button className="btn-back" onClick={this.nextboxSlider3}><img src={back}></img></button>
                    <button className="btn-next-2" onClick={this.nextboxSlider3}><img src={next}></img></button> */}
                </div>
            </div>
        )
    }
}
export default Customer