import React from "react";
import Award1 from "../image/Award_01.png";
import Award2 from "../image/Award_02.png";
import Award3 from "../image/Award_03.png";
import Award4 from "../image/Award_04.png";
import Award5 from "../image/Award_05.png";
import Award6 from "../image/Award_06.png";
import Award8 from "../image/Award_08.png";
import Award7 from "../image/Award_07.png";


class Recognized extends React.Component {
  constructor(props) {
    super(props)
    this.SliderCount = 7;
    this.currentSlider = 1;
    this.NextSlider1=this.NextSlider1.bind(this)
    
  }
  load3(){
      
     
       
      
    let Slider4Element = document.getElementById("box-box4-4")
    if (Slider4Element) {
      Slider4Element.style.width = (this.SliderWidth * this.SliderCount) + "px"
    }
   
    
  }
  
  NextSlider1() {
    if (this.currentSlider === this.SliderCount-1) {
      this.currentSlider = 1
    } else {
      this.currentSlider++
    }
    
    let leftPPosition = (this.currentSlider - 1) * this.SliderWidth
    let Slider4Element = document.getElementById("box-Slider")
    if (Slider4Element) {
      if (this.currentSlider === 1) {
        Slider4Element.style.left = "0"
      } else {
        Slider4Element.style.left = "-" + leftPPosition + "px"
      }
    }
   
 
  }
  componentDidMount() {
    window.addEventListener("load3",this.load3())
    this.SliderWidth = document.getElementById("box-box4-4").clientWidth/4 
    this.SliderInterval = setInterval(this.NextSlider1 , 5000);
   }

   componentWillUnmount() {

   }

  render() {
    return (
      <div className="full-box-4 full-box-slider">
       
        <div className="box-box4" >
        <div className="title"><h2>As Recognized By</h2></div>
          <div className="recognzied"id="box-box4-4" >
              <div className="item-box4"id="box-Slider">
                
                <div className="boxItems"><img src={Award1}></img></div>
                <div className="boxItems"><img src={Award2}></img></div>
                <div className="boxItems"><img src={Award3}></img></div>
                <div className="boxItems"><img src={Award4}></img></div>
                <div className="boxItems"><img src={Award5}></img></div>
                <div className="boxItems"><img src={Award6}></img></div>
                <div className="boxItems"><img src={Award7}></img></div>
                <div className="boxItems"><img src={Award8}></img></div>
                
              
              </div>
          </div>
        </div>
       
      </div>
    )
  }
}
export default Recognized