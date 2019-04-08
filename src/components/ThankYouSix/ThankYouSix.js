import React, { Component } from 'react';
import { connect } from 'react-redux';




class ThankYouSix extends Component {

  handleClick = () => {
    this.props.history.push('/');
  }


  render() {
    return (
      <div>
          <h1>Thank You</h1>
          <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ThankYouSix);