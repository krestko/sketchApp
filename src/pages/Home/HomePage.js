import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Components from '../../api/ComponentsAPI';
import Home from '../../components/Home/Home'
import '../../App.css';
import './HomePage.css'

class HomePage extends Component {
  state = {
    components: null,
    component: null,
    component_name: '',
    redirect: false
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
          components: json,
          component_name: '',
          redirect: true
        }))
    }

    handleComponentName = (e) => {
      this.setState({component_name: e.target.value});
    }
    
  render() {
    if(this.state.redirect) {
      return <Redirect to={`/components/${this.state.components[this.state.components.length - 1].id}`} />
    }

    return (
      <div id='Grid-container'>
        <div className='Grid-item-1'>
          Projects
        </div>
          {this.state.components ? <Home components={this.state.components} deleteThis={this.deleteThis}/> : null}
          <form className='Grid-item-3'>
            <h6>New App Sketch:</h6>
            <input name='component_name' type='text' value={this.state.component_name} onChange={this.handleComponentName}/><br/>
            <button type="submit" value='Submit' onClick={this.handleSubmit}>Submit</button>
          </form>
      </div>
    )
  }
}

export default HomePage;
