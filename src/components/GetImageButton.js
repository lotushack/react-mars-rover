import React, {Component} from 'react';

export default class GetImageButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="btn btn-primary btn-lg">
        Get Rover Images</button>
    )
  }
}
