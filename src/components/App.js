import React, { Component } from 'react';
import OutputContent from './OutputContent/OutputContent'
import InputForm from './InputForm/InputForm'
class App extends Component {

  state = {
    users :[
      {id: 1, name : 'Refat Hasan', username : 'refathasan'},
      {id: 2, name : 'Md Gulam Jilani', username : 'jilani'},
      {id: 3, name : 'Sadek Hossain', username : 'sadekhosain'},
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row my-5">
            <div className="col-sm-7">
              <OutputContent users ={this.state.users} name='Md Gulam Hakkani' age='27' username='hakkani' />
              <OutputContent users ={this.state.users} name='Md Refat Hasan' age='25' username='refathasan' />
              <OutputContent users ={this.state.users} name='Tarekul Isalm' age='22' username='islamtarek' />
            </div>
            <div className="col-sm-5">
              <InputForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
