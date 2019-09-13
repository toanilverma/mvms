import React,{Component} from 'react';
import logo from './logo.svg';
import './contact.css';

class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {name: '',  contact:'',message:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function(e){
      var state={};
      state[key]=e.target.value;
      this.setState(state);     
    }.bind(this)
    
  }

  handleSubmit(event) {
    var data = {
      name: this.state.name,
      contact: this.state.contact,
      message:this.state.message      
  }

  // alert('Hello ' + data.name + ', your message is: ' + data.contact);
  
    event.preventDefault();
  }
 
  render(){
    return (
      
      <form onSubmit={this.handleSubmit}>
        <div className='frm'>
      <label>
        Name:<br />
        <input  type="text" value={this.state.name} onChange={this.handleChange('name')} />
      </label><br />
      <label>
        Contact:<br />
        <input  type="text" value={this.state.contact} onChange={this.handleChange('contact')} />
      </label><br />
      <label>
          Message:<br />
          <textarea rows="4" cols="35" type="text" value={this.state.message} onChange={this.handleChange('message')} />
        </label><br />
      <input type="submit" value="Submit" />
      </div>
    </form>
    

    );
  }
  }
  

export default Contact;
