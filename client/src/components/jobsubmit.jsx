import React from 'react';
import axios from 'axios';

export default class jobSubmit extends React.Component {
  constructor() {
    super();
    this.state = {
      company_name: '',
      title: '',
      salary: '',
      next_action:'',
      company_url:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { company_name, name, salary, due_date, url } = this.state;
    console.log(this.state);
    axios.post("/scholarshipSubmit", {
    company_name,
    title,
    salary,
    next_action,
    company_url,
    }).then((res)=>{
    alert("Thank you for your submission");
    });

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="company_name">Name of Company: </label>
          <input onChange={this.handleChange} name="company_name" type="text" />
        <label htmlFor="title">Job Title: </label>
          <input onChange={this.handleChange} name="title" type="text" />
          <label htmlFor="salary">Salary offered? </label>
            <input onChange={this.handleChange} name="salary" type="text" />
            <label htmlFor="next_action">("WIP") </label>
              <input onChange={this.handleChange} name="next_action" type="text" />
              <label htmlFor="company_url">Enter the company's url here. </label>
              <input onChange={this.handleChange} name="company_url" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
