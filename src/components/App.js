import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Preview from './Preview.js';
import PreviewDescription from './PreviewDescription.js';
import IconFunction from './IconFunction.js';
import ProfileImage from './ProfileImage.js'
import '../css/App.css';

const writtenDate = new Date();

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      author : 'JeongHoon',
      writeDate : writtenDate,
      text : 'Learning React? Start Small',
      link : 'https://github.com/JeongHoon-Park/SocialCard-React',
    }
  }

  //일단 주요 부분 다 만들고 컴포넌트로 나누어보자.
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="Card">
            <ProfileImage />
            <Header author={this.state.author} date={this.state.writeDate}/>
            <Content text={this.state.text}/>
            <Preview link={this.state.link} author={this.state.author} text={this.state.text}/>
            <PreviewDescription text={this.state.text} link={this.state.link}/>
            <IconFunction />
          </div>      
        </div>
      </div>
    );
  }
}

export default App;
