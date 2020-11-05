 // eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Toc from "./components/Toc";
import Content from "./components/Content";
import Subject from "./components/Subject";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:"read",
      selected_content_id:2,
      subject:{title:'WEB', sub:'world wide web'},
      welcome:{title:'welcome', desc:'hello'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is as111kdjasd'},
        {id:2, title:'CSS', desc:'css is as111kdjasd'},
        {id:3, title:'Javascript', desc:'java is as111kdjasd'}
      ]
    }
  }
  render() {
    var _title = null;
    var _desc= null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read'){
      var i =0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }

    return(
      <div className="APP">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage ={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          >
          
        </Subject>

        {/* 함수를 쓸땐 this. 이 자기자신을 가르키지 않기 때문에
          bind를 통해서 가르키게 해야한다 */}
        
      <Toc onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        });
      }.bind(this)}
      data={this.state.contents}>
      </Toc>
      <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
