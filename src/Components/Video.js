import React, {Component} from 'react';

import vid1 from './vid/sunset1.MOV';
import vid2 from './vid/sunset3.mov';
import vid3 from './vid/sunset5.MOV';
import vid4 from './vid/sunset6.MOV';
import vid5 from './vid/sunset7.MOV';


import './over.css';


class Video extends Component {
    constructor(){
        super();
        this.state = {
            active: false,
            modalVid: '',
            modalDisplay: 'none'
        };
    }

    clickVid(vid){
        this.setState({modalVid: vid,
            modalDisplay: 'flex',
            active: true
        });
    }

    closeVid(){
        this.setState({modalDisplay: 'none'});
    }
    render(){
        return (
            <div>
                <h1>Videos</h1>
                <body>
                    <div className="grid-container">
                        <div className="grid-item"><video className="grid-image" onClick={(e)=>this.clickVid(vid1)} src={vid1}></video></div>
                        <div className="grid-item"><video className="grid-image" onClick={(e)=>this.clickVid(vid2)} src={vid2}></video></div>
                        <div className="grid-item"><video className="grid-image" onClick={(e)=>this.clickVid(vid3)} src={vid3}></video></div>
                        <div className="grid-item"><video className="grid-image" onClick={(e)=>this.clickVid(vid4)} src={vid4}></video></div>
                        <div className="grid-item"><video className="grid-image" onClick={(e)=>this.clickVid(vid5)} src={vid5}></video></div>
                    </div>

                    <div className="modal" id="myModal" style={{display:this.state.modalDisplay}} onClick={(e)=>this.closeVid()}>
                        <video class="modal-content-vid" id='currentImg' src={this.state.modalVid} controls={this.state.active} autoPlay={true} 
                        paused={!this.state.active}></video>
                    </div>
                </body>
            </div>  
        )
    }
}

export default Video;