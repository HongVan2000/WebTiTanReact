import React from "react";
import logo from "../image/logo-header.png"
import Flag from "../image/Flag.svg"
import Menu from "../image/Menu.svg"


class Header extends React.Component{
    constructor(props) {
        super(props)
        this.greyoutHeader = this.greyoutHeader.bind(this)
        // this.state={ text:"xyz"};
        
        
    }
    
    
    
    
    
    greyoutHeader() {
      // this.setState({
      //   text:"abc"
      // });

      
      // console.log(this.state.text);
      let mainHeader = document.getElementById("main-header")
      if (mainHeader) {
        if (window.scrollY > 0) {
          if (!mainHeader.classList.contains("scroll")) {
            mainHeader.classList.add("scroll")
          }
        } else {
          mainHeader.classList.remove("scroll")
        }
      }
    }

    componentDidMount() {
      
      window.addEventListener("scroll", this.greyoutHeader)
      
    }

    componentWillUnmount() {

    }
    
     
    render() {
        return (
          <div className="main-header" id="main-header">
              <a href="#" className="logo"><img src={logo}></img></a>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#"><img src={Flag}></img></a></li>
                <li><a href="#" id="link-change-language">日本</a></li>
                <li><button id="btn-menu" className="btn-menu"><img src={Menu}></img></button></li>
              </ul>
         </div>
        )
       
    } 
   
}

export default Header
 
 