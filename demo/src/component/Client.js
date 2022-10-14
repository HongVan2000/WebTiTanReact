import React from "react";
import client1 from "../image/client1.jpeg";
import client2 from "../image/client2.jpeg";
import client3 from "../image/client3.jpeg";
import client4 from "../image/client4.jpeg";
import client5 from "../image/client5.jpeg";
import client6 from "../image/client6.jpeg";
import client7 from "../image/client7.jpeg";
import client8 from "../image/client8.jpeg";
import client9 from "../image/client9.jpeg";
import client10 from "../image/client10.jpeg";
import client11 from "../image/client11.jpeg";
import client12 from "../image/client12.jpeg";
import client13 from "../image/client13.jpeg";
import client14 from "../image/client14.jpeg";
import client15 from "../image/client15.jpeg";
import back from "../image/next.svg";
import next from "../image/back.svg"



 class Client extends React.Component{
    constructor(props){
        super(props)
        this.Slider2ItemCount = 15
        this.currentSlider2Item = 1
        this.backSlider2=this.backSlider2.bind(this)
      this.nextSlider2=this.nextSlider2.bind(this)
        
        
    }
    load2(){
        let Slider2Elm = document.getElementById("Slider-3-item3")
        if (Slider2Elm) {
          Slider2Elm.style.width = (this.Slider2ItemWidth * this.Slider2ItemCount) + "px"
        }
       
      }
      
       nextSlider2 () {
  
      
        if (this.currentSlider2Item === this.Slider2ItemCount - 4) {
          this.currentSlider2Item = 1
        } else {
          this.currentSlider2Item++
        }
      
        let leftPositions = (this.currentSlider2Item - 1) * this.Slider2ItemWidth
        let Slider2Element = document.getElementById("Slider-3-item3")
        if (Slider2Element) {
          if (this.currentSlider2Item === 1) {
            Slider2Element.style.left = "0"
          } else {
            Slider2Element.style.left = "-" + leftPositions + "px"
          }
        }
      }
      
       backSlider2 () {
  
        if (this.currentSlider2Item === 1) {
          this.currentSlider2Item = this.Slider2ItemCount 
        } else {
          this.currentSlider2Item--
        }
      
        let leftPositions = (this.currentSlider2Item - 1) * this.Slider2ItemWidth
        let Slider2Element = document.getElementById("Slider-3-item3")
        if (Slider2Element) {
          if (this.currentSlider2Item === 1) {
            Slider2Element.style.left = "0"
          } else {
            Slider2Element.style.left = "-" + leftPositions + "px"
          }
        }
      }
      componentDidMount() {
        window.addEventListener("load2",this.load2())
        this.Slider2ItemWidth = document.getElementById("Slider-3").clientWidth / 4
        this.Slider2Interval = setInterval(this.nextSlider2, 5000);
        
        
       }
   
       componentWillUnmount() {
   
       }
    render(){
        return(
            <div className="Full-box-client full-box-3">
                <div className="Slider" id="Slider-3">
                    <a href="#"><h2>OUT CLIENT</h2></a>
                    <div className="item3">
                        <div className="Sliders" id="Slider-3-item3">
                            <div className="slider-item3">
                                <img src={client1}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client2}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client3}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client4}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client5}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client6}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client7}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client8}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client9}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client10}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client11}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client12}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client13}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client14}></img>
                            </div>
                            <div className="slider-item3">
                                <img src={client15}></img>
                            </div>

                        </div>
                    </div>

                </div>
                <button className="btn-back" onClick={this.backSlider2}><img src={next}></img></button>
              <button className="btn-next-2" onClick={this.nextSlider2}><img src={back}></img></button>
                
            </div>
        )
    }
 }
 export default Client