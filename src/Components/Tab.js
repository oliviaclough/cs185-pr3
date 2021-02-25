import React, { Component } from 'react';
import '../App.css';

function Tab(props) {

    const addStyle = () => {
        if(props.out.id === props.activeTab) {
            return {backgroundColor: '#61778c'}
        }else {
            return {backgroundColor: '#48535e'}
        }
    };
    console.log(props)

    return (
        // inline styling and onclick bind
        <div className="tab" style={addStyle()} onClick={props.ctab.bind(this,props.out.id)}>{props.out.title}</div>
    )
}
export default Tab;