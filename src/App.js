import './App.css';
import Tablist from './Components/TabList';
import Body from './Components/Body';
import { Component } from 'react';
import ReactDOM from "react-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      active :1
    }
    this.changeTab=(id)=> {
      this.setState({
        active :id
      })
    }
  }

  render(){
    const tabs =[{
      id:1,
      title:'Text'
    },
    {
      id:2,
      title:'Image'
    },
    {
      id:3,
      title:'Video'
    },
    {
      id:4,
      title:'Table'
    },
    {
      id:5,
      title:'Email'
    },
  ]
    return (
      <div className="App">
        <div className="tablist">
          <Tablist tabs={tabs} activeTab={this.state.active} ctab={this.changeTab}/>
        </div>
        <div className="body">
          <Body activeTab={this.state.active}/>
        </div>
      </div>
    );
  }
}


export default App;