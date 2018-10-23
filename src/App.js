import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';

class App extends React.Component{
  state = {
    obj : {
      word: '',
     speachPart: null,
     defi: null
    }
  }

  handleSubmit = async (e) => {
    const self =this;
    e.preventDefault();
    const word = this.state.word;

    axios.get(`https://owlbot.info/api/v2/dictionary/${word}?format=json`)
      .then(function (response) {
        console.log(response.data[0]);
        const obj = {
          speachPart: response.data[0].type,
          defi: response.data[0].definition
        }
        self.setState({obj})
      })
      .catch(function (error) {
        console.log(error);
      });
 
  

    
  }
  render(){
    return (
      <div className="App">
        
        <Header />
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter word..."
          value={this.state.word}
          onChange={(e) => this.setState({ word: e.target.value })}
        />
        <input type='submit' value='Go' />

        </form>
       
        <div className="second">
          <div>
            <span className="partsch">
            Part of speach : {this.state.obj.speachPart}
            </span>
          </div> 

          <div>
            <span className="defini">
            Definition : {this.state.obj.defi}
            </span>
          </div>
        </div>

         
      </div>
    );
  }
};
export default App;

//console.log('aaaaaaaa', data);
// console.log(data.results[0].senses[0].definition[0])
//const api_call = await fetch(`https://owlbot.info/api/v2/dictionary/chair?format=json`);
// const data = await api_call.json();
// console.log('Data : ', data);
// let defi = data[0].definition;
// let part = data.results[0].part_of_speech;
// console.log(defi);    
// this.setState({defi});
// this.setState({speachPart: part});