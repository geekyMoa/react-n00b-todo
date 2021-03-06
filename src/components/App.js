import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Item from './Item';

export default class App extends Component {

  constructor(props) {
    super(props);

    localStorage.moasAwesomeTodo = localStorage.moasAwesomeTodo || JSON.stringify({
          items: []
        });

    this.state = JSON.parse(localStorage.moasAwesomeTodo);
  }

  handleSubmit(e) {
    const value = this.refs.tha_input.value;
    this.refs.tha_input.value = '';

    let newItems = this.state.items;
    newItems.push({
      name: value,
      isCompleted: 0,
      isVisible: 1
    });

    this.setState({items: newItems}, () => {
      localStorage.moasAwesomeTodo = JSON.stringify(this.state);
    });

    e.preventDefault();
  }

  handleClick(newStatus, key) {
    let newStuff = this.state.items;
    newStuff[key].isCompleted = newStatus;
    this.setState({items: newStuff}, () => {
      localStorage.moasAwesomeTodo = JSON.stringify(this.state);
    });

  }


  handleFilter(type) {
    let items = this.state.items;

    switch(type) {
      case 'all':
        items.forEach((item, i, arr)=>{
          items[i].isVisible = 1;
        });
        items.sort((a, b) => a.isCompleted - b.isCompleted);
        break;
      case 'todo':
        items.forEach((item, i, arr) => {
          items[i].isVisible = item.isCompleted ? 0 : 1;
        })
        break;
      case 'completed':
        items.forEach((item, i, arr) => {
          items[i].isVisible = item.isCompleted ? 1 : 0;
        });
        break;

      case 'delete':
        items = items.filter((el, i, arr) => !el.isCompleted);
        break;
    }

    this.setState({items}, () => {
      localStorage.moasAwesomeTodo = JSON.stringify(this.state);
    });
  }

  render() {
    const things = this.state.items.map((thing, i) => {
      return thing.isVisible ? <Item key={i} arrayKey={i} item={thing} handle={this.handleClick.bind(this)}/> : null;
    });

    return (
        <div>
          <Header />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="tha_input" name="new_item"/>
          </form>
          <button onClick={this.handleFilter.bind(this, 'all')}>All</button>
          <button onClick={this.handleFilter.bind(this, 'todo')}>To do</button>
          <button onClick={this.handleFilter.bind(this, 'completed')}>Completed</button>
          <button onClick={this.handleFilter.bind(this, 'delete')}>Delete completed</button>
          <div className="things">
            {things}
          </div>
          <Footer />
        </div>
    );
  }
}
