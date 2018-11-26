import React, { Component } from 'react';
import Components from '../api/ComponentsAPI';
import Home from '../components/Home/Home'
import '../App.css';

class HomePage extends Component {
  state = {
    components: null,
    component: null,
    component_name: ''
  }

    componentDidMount() {
    Components.fetchComponents()
      .then(json => this.setState({
        components: json
      }))
    }

    deleteThis = (componentID) => 
      Components.deleteComponent(componentID)
      .then(() => Components.fetchComponents())
      .then(json => {
        this.setState({
        components: json
      })
    });

    handleSubmit = (e) => {
      e.preventDefault();
      Components.addComponent({component_name: this.state.component_name})
        .then(() => Components.fetchComponents())
        .then(json => this.setState({
          components: json
        }))
    }

    handleComponentName = (e) => {
      this.setState({component_name: e.target.value});
    }
    
  render() {
    return (
      <div className="app">
        <div className='Logo'>
          <h1>{`{⌘App ⌘Sketch}`}</h1>
            <p>Copy-Paste Style Generations through Drop-Down Design</p>
        </div>
        {this.state.components ? <Home components={this.state.components} deleteThis={this.deleteThis}/> : null} 
        <div>    
        <form>
          <h6 className="Categories">New App Sketch:</h6>
          <input style={{textAlign: 'center', fontSize: '20px'}} className='Change' name='component_name' type='text' value={this.state.component_name} onChange={this.handleComponentName} /><br />
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
        </div> 
      </div>
    )
  }
}

export default HomePage;
