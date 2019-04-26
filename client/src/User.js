import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="profile-icon">
        // pass color on props to messagelist and apply css on message-username , inline style
        className="message-username" style={{color: userColor.color}}>{this.props.chattyAppUsername}
      </div>
    );
  }
}

export default Message;