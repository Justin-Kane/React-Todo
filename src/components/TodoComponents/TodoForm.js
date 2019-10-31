import React from "react";
import styled from "styled-components"

const Form = styled.form`
display: flex;
flex-direction:column;
align-items: center;
`;

const Label = styled.label`
font-family: 'Rock Salt';
font-size: 2rem;
color:black
`;

const Input = styled.input`
font-family: 'Rock Salt';
width:90%;
height: 50px
color:black
font-size:1.2rem;
`;

const Button = styled.button`
width: 120px;
height:40px;
border-radius:5px
background-color:#242c3c
color:#e0dbd1;
font-family: 'Rock Salt';
margin-top:2%;
font-size:1.2rem;
`;
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChange = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("working");
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="task">Write your tasks below:</Label>
        <Input
          type="text"
          name="task"
          id="task"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <Button>Add Task</Button>
      </Form>
    );
  }
}

export default TodoForm;