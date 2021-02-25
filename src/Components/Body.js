import React, { Component } from 'react';
import Text from "./Text";
import Table from "./Table";
import Email from "./Email";
import Image from "./Image";
import Video from "./Video";
import '../App.css';

class Body extends Component {

    render() {
        var displayContent = () => {
            var activeTab = this.props.activeTab;
            if(activeTab === 1) {
                return <Text/>
            }
            if(activeTab === 2) {
                return <Image/>
            }
            if(activeTab === 3) {
                return <Video/>
            }
            if(activeTab === 4) {
                return  <Table/>
            } 
            if(activeTab === 5) {
                return  <Email/>
            }
            else {
                return <div></div>
            }
        }

        return (displayContent())
    }
}
export default Body;