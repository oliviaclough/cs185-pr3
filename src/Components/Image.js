import React, {Component} from 'react';
import pasta from './images/pasta.jpg';
import burger from './images/burger.jpg';
import food from './images/food.jpg';
import pizza from './images/pizza.jpg';
import fries from './images/fries.jpg';
import toast from './images/toast.jpg';
import baked from './images/baked.jpg';
import ctm from './images/ctm.jpg';

import './over.css';


class Image extends Component {
    constructor(){
        super();
        this.state = {
            active: false,
            modalImg: '',
            modalDisplay: 'none'
        };
    }

    clickImg(image){
        this.setState({modalImg: image,
            modalDisplay: 'flex'
        });
    }

    closeImg(){
        this.setState({modalDisplay: 'none'});
    }

    topOnClick = () => {
        console.log("scrolling"); 
        window.scrollTo(0,0); 
    }

    componentDidMount = () => {
        var top_button = document.getElementById("top_button");
        document.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                top_button.style.display = "block";
            } else {
                top_button.style.display = "none";
            }
        };
    }

    render(){
        return (
            <div>
                <h1> Pictures </h1>
                <body>
                    <div className="grid-container">
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(pasta)} src={pasta}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(burger)} src={burger}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(food)} src={food}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(pizza)} src={pizza}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(fries)} src={fries}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(toast)} src={toast}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(baked)} src={baked}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(ctm)} src={ctm}></img></div>

                    </div>

                    <div className="modal" id="myModal" style={{display:this.state.modalDisplay}} onClick={(e)=>this.closeImg()}>
                        <img  class="modal-content" id='currentImg' src={this.state.modalImg}></img>
                    </div>
                </body>
                <button id="top_button" onClick={() => this.topOnClick()} className="top">Back To Top</button>
            </div>
        )
    }
}

export default Image;
