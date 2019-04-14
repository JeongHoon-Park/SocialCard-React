import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import '../css/App.css';

const writtenDate = new Date();

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      author : 'JeongHoon',
      writeDate : writtenDate
    }
  }

  //일단 주요 부분 다 만들고 컴포넌트로 나누어보자.
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="Card">
            <Header author={this.state.author} date={this.state.writeDate}/>
            <div> 
              <p className="mb-1">
                Learning React? Start Small  
              </p>  
            </div>
            <div className="bg-warning p-2 mb-2">
              <div className="d-flex flex-row Index">
              
              </div>
              <div className="d-flex flex-row justify-content-center py-5 px-4 text-white">              
                <h2>
                  Learning React? Start Small
                </h2>
              </div>
              <div className="d-flex flex-row mb-2 mx-2 CardBox ml-auto bg-white align-items-center">
                <h4>
                  Someone
                </h4>
              </div>

            </div>   
          </div>      
        </div>
      </div>
    );
  }
}

export default App;
