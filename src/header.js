import React,{Component} from 'react';
import logo from './logo.svg';
import logo1 from './logo1.jpg';
import './App.css';
import Slide from './slide';
import LeftArrow from './left';
import RightArrow from './right';
import anil from '../src/images/Anil.jpg';
import notebookdist from './images/notebookdist.jpg';
import { BrowserRouter as  Link } from "react-router-dom";

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [
        './images/anil.jpg',
        './images/notebookdist.jpg' ,
        './images/village.jpg',
        './images/green.jpg',
        './images/learning.jpg'                 
              ],
      currentIndex: 0,
      translateValue: 0
    }
    }

    componentDidMount(){
         setInterval(() => {
          if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0 ,
              translateValue: 0       
            })
          }
          this.setState(prevState => ({
            
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue-(this.slideWidth())
          }))
         }, 3000);
     }
     

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
    return;
  
  this.setState(prevState => ({
    currentIndex: prevState.currentIndex - 1,
    translateValue: prevState.translateValue + this.slideWidth()
  }))
    
  }

  

  goToNextSlide = () => {   
    
        if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0 ,
        translateValue: 0       
      })
    }
    this.setState(prevState => ({
      
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue-(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
 }


  render(){   
    return (
      <div>
<div className="slider">
  <div className="slider-wrapper" style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
  {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
  </div> 

<LeftArrow goToPrevSlide={this.goToPrevSlide} />

<RightArrow goToNextSlide={this.goToNextSlide} />


</div>
<div>
<ul className="App-header">
<li className="linkspace"><a  href="/">Home</a></li>
<li className="linkspace"><a  href="/about">About</a></li>
<li className="linkspace"><a  href="/contact">Contact us</a></li>
</ul>
</div>
</div>
 
    );
  }
}
  

export default Header;
