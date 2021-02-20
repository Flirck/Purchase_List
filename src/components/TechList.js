import React, { Component } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { SubmitButton, Form, DivContainer } from '../styles/styles';

import TechItem from '../components/TechItem';


class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount() {

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    const currentTech = this.state.newTech
    const techExist = this.state.techs.filter(t => t.toUpperCase() === currentTech.toUpperCase())
    e.preventDefault();

    if ( currentTech !== '' && techExist.length === 0) {
        this.setState({ 
          techs: [currentTech,...this.state.techs ],
         })
      }

    this.setState({newTech: ''})
  }

  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech) });
  }

  removeAll = e => {
    e.preventDefault();
    this.setState({techs: [...[]]});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() =>this.handleDelete(tech)}
            />
          ))}
        </ul>

        <DivContainer>
          <input 
            type="text" 
            onChange={this.handleInputChange}
            value={this.state.newTech}
            placeholder="Digite o item" 
          />

          <button type="submit"> <FaPlus /> </button>
          <button type="button" onClick={this.removeAll}> <FaTrash /> </button>
        </DivContainer>

      </Form>
    );
  }
}

export default TechList;