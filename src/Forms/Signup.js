import React, {Component} from 'react';
import './forms.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="f_name" value={this.state.f_name} onChange={this.handleChange} />
        </label>
        
        <label>
          Last Name:
          <input type="text" name="l_name" value={this.state.l_name} onChange={this.handleChange} />
        </label>
        
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        
        <label>
          Content:
          <textarea type="text" name="content" value={this.state.content} onChange={this.handleChange} />
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignupForm;