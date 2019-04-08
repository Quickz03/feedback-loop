import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReviewFive extends Component {

  buttonDisplay = () => {
    console.log(this.props.reduxState.commentReducer);
    if (this.props.reduxState.commentReducer.length === 0) {
      return (<button disabled>Incomplete</button>)
    }
    else{
      return (
      <a href='/#/thankyou6'><button onClick={this.props.postFeedback}>Submit</button></a>
      )
    }
  }

  render() {
    return (
      <section className="reviewSection">
        <h1>Review Your Feedback</h1>
        <div>
          <h3>Feelings: {this.props.reduxState.feelingReducer}</h3>
          <h3>Understanding:{this.props.reduxState.understandingReducer}</h3>
          <h3>Support:{this.props.reduxState.supportReducer}</h3>
          <h3>Comments:{this.props.reduxState.commentReducer}</h3>
          {this.buttonDisplay()}
        </div>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ReviewFive);