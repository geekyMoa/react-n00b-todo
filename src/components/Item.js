import React from 'react';

export default class Item extends React.Component {

  constructor() {
    super();
  }

  handleClick() {
    if (this.props.handle) {
      return this.props.handle(!this.props.item.isCompleted, this.props.arrayKey);
    }
  }

  render() {
    return (
        <div data-completed={this.props.item.isCompleted} onClick={this.handleClick.bind(this)}>
            {this.props.item.name}
        </div>
    );
  }
}