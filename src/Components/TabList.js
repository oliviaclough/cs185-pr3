import React, { Component } from 'react';
import Tab from './Tab';

class Tablist extends Component {

    render() {
        console.log("id is " + this.props.activeTab)

        return(
            this.props.tabs.map((tab)=>
                <Tab out={tab} activeTab={this.props.activeTab} ctab={this.props.ctab}/>
            )
        )
    }
}
export default Tablist;