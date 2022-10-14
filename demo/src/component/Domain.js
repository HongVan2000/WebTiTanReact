import React from "react";
import domain1 from "../image/domain1.png";
import domain2 from"../image/domain2.png";
import domain3 from "../image/domain3.png";
import domain4 from "../image/domain4.png";
import domain5 from "../image/domain5.png";
import domain6 from "../image/domain6.png";
import domain7 from "../image/domain7.png";
import domain8 from "../image/domain8.png";
import domain9 from "../image/domain9.png";

import back from "../image/back.svg";
import next from "../image/next.svg";

class Domain extends React.Component{
    constructor(props){
        super(props)
        // this.topSliderItemCount = 4
        this.subSlider1ItemCount = 9
        this.currentSubSlider1Item = 1
        
        this.backSubSlider1=this.backSubSlider1.bind(this)
      this.nextSubSlider1=this.nextSubSlider1.bind(this)
      
    }
    addEventListener(){
      
     
      // let topSlider = document.getElementById("top-slider")
      // if (topSlider) {
      //   topSlider.style.width = this.topSliderItemWidth * this.topSliderItemCount + "px"
      // }
    
      let subSlider1Elm = document.getElementById("sub-slider-1-items")
      if (subSlider1Elm) {
        subSlider1Elm.style.width = (this.subSlider1ItemWidth * this.subSlider1ItemCount) + "px"
      }
      let subSlider1Items = document.querySelectorAll("#sub-slider-1-items .slide-item")
      subSlider1Items.forEach((elm) => {
        elm.style.width = this.subSlider1ItemWidth + "px"
      })
    }
    
     nextSubSlider1 () {

     
      if (this.currentSubSlider1Item === this.subSlider1ItemCount - 3) {
        this.currentSubSlider1Item = 1
      } else {
        this.currentSubSlider1Item++
      }
    
      let leftPosition = (this.currentSubSlider1Item - 1) * this.subSlider1ItemWidth
      let subSlider1Element = document.getElementById("sub-slider-1-items")
      if (subSlider1Element) {
        if (this.currentSubSlider1Item === 1) {
          subSlider1Element.style.left = "0"
        } else {
          subSlider1Element.style.left = "-" + leftPosition + "px"
        }
      }
    }
    
     backSubSlider1 () {

      
      if (this.currentSubSlider1Item === 1) {
        this.currentSubSlider1Item = this.subSlider1ItemCount - 3
      } else {
        this.currentSubSlider1Item--
      }
    
      let leftPosition = (this.currentSubSlider1Item - 1) * this.subSlider1ItemWidth
      let subSlider1Element = document.getElementById("sub-slider-1-items")
      if (subSlider1Element) {
        if (this.currentSubSlider1Item === 1) {
          subSlider1Element.style.left = "0"
        } else {
          subSlider1Element.style.left = "-" + leftPosition + "px"
        }
      }
    }
    componentDidMount() {
      this.addEventListener=this.addEventListener.bind(this)
      // this.topSliderItemWidth = document.getElementsByClassName("slide-item")[0].clientWidth
      this.subSlider1ItemWidth = document.getElementById("sub-slider-1").clientWidth / 3
      this.SlideritemInterval = setInterval(this.nextSubSlider1 , 5000);
     }
 
     componentWillUnmount() {
 
     }
    render(){
        return(
          <div className="full-box full-box-1">
            <div className="box sub-slider" id="sub-slider-1">
            <a href="#"><h2>DOMAINS & TECHNOLOGIES</h2></a>
            <div className="items">
                <div className="slides" id="sub-slider-1-items">
                  
          
              <div className="slide-item">
                <img src={domain1}></img>
                <a href="#"><h2>MOBILE DEVELOPMENT</h2></a>
                <p>We have expertise in building mobile applications and mobile games on multiple platforms</p>
              </div>
              <div className="slide-item">
                <img src={domain2}></img>
                <a href="#"><h2>WEB APP DEVELOPMENT</h2></a>
                <p>Our teams understand how to build web applications with insight UX/UI that help to strengthen the client businesses and brand awareness from the bottom-line</p>
              </div>
              <div className="slide-item">
                <img src={domain3}></img>
                <a href=""><h2>DESKTOP DEVELOPMENT</h2></a>
                <p>We develop cross-platform standalone and client-server applications which run stability scalable, and also easy to convert to other architects or business models</p>
              </div>
              <div className="slide-item">
                <img src={domain4}></img>
                <a href="#"><h2>CLOUD BASED DEVELOPMENT</h2></a>
                <p>We have extensive experience in implementation of specific PaaS and SaaS solutions</p>
              </div>
              <div className="slide-item">
                <img src={domain5}></img>
                <a href="#"><h2>TELECOM & NETWORKING</h2></a>
                <p>Our team has strong experience in telecom and network systems that enable us to provide both testing and development services</p>
              </div>
              <div className="slide-item">
                <img src={domain6}></img>
                <a href="#"><h2>TESTING & QUALITY ASSURANCE</h2></a>
                <p>We develop cross-platform standalone and client-server applications which run stability scalable, and also easy to convert to other architects or business models</p>
              </div>
              <div className="slide-item">
                <img src={domain7}></img>
                <a href="#"><h2>BLOCKCHAIN DEVELOPMENT</h2></a>
                <p>We have experiences in setting up, configuring, and developing applications based on Block chain technologies: Ethereum, De-centralized, Smart Contract, Cryptocurrency</p>
              </div>
              <div className="slide-item">
                <img src={domain8}></img>
                <a href="#"><h2>ARTIFICIAL INTELLIGENCE</h2></a>
                <p>We have extensive experiences in implementation of specific solutions with AI inside: Core Machine Learning Algorithms, Unsupervised Learning, Data Preparation...</p>
              </div>
              <div className="slide-item">
                <img src={domain9}></img>
                <h2>ERP/CRM IMPLEMENTATION</h2>
                <p>Experienced team to consult and implement ERP and CRM solutions based on Microsoft and Open Source technologies (Dynamics AX/365/NAV, OpenERP(Odoo), SugarCRM, vTiger, and so on) with following services:</p>
              </div>
                  
                </div>
              </div>
              
            </div>
              <button className="btn-previus" onClick={this.backSubSlider1}><img src={back}></img></button>
              <button className="btn-next" onClick={this.nextSubSlider1}><img src={next}></img></button>
              
          </div>
          
            
     
        
   

        )
    }
}
export default Domain