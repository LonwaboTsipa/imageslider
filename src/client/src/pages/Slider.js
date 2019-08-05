import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import '../assets/app.css';
import { getImages } from '../api/api';
import ClickContainer from './ClickContainer';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        images: [],
        currentIndex: 0,
        translateValue: 0
    }
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this)
  }

  componentDidMount(){
      getImages().then(list => this.setState({ images: list }))
  }


goToPrevSlide = () => {
    if(this.state.currentIndex === -(this.state.images.length - 1)) {
        return this.setState(({
          currentIndex: 0,
          translateValue: 0
        }))
    }

    this.setState(prevState => ({
        currentIndex: prevState.currentIndex === 0 ? this.state.images.length - 1 : prevState.currentIndex - 1,
       translateValue: prevState.currentIndex === 0 ? -(prevState.translateValue + +(this.slideWidth()) * (this.state.images.length -1)) :prevState.translateValue + +(this.slideWidth())
      }));
}

goToNextSlide() {
    if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
    }
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
}

slideWidth = () => {
    return document.querySelector('.slide').clientWidth
 }


  render() {
 
    return (
      <div className="slider">
         <ClickContainer goToPrevSlide={this.goToPrevSlide} goToNextSlide={this.goToNextSlide}/>
	    <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.length > 0 && this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>
       { this.state.images.length > 0 && <div className="description">
            {this.state.images[this.state.currentIndex].description}
        </div>}
       
      <LeftArrow goToPrevSlide={this.goToPrevSlide} />
      <RightArrow goToNextSlide={this.goToNextSlide} />

      </div>
    );
  }
}