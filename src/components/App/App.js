import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import FeelingOne from '../FeelingOne/FeelingOne';
import UnderstandingTwo from '../UnderstandingTwo/UnderstandingTwo';
import SupportedThree from '../SupportedThree/SupportedThree';
import CommentsFour from '../CommentsFour/CommentsFour';
import ReviewFive from '../ReviewFive/ReviewFive';
import ThankYouSix from '../ThankYouSix/ThankYouSix';



class App extends Component {

  state = {
    feedbackList: [],
  }

  postFeedback = () => {
    console.log('in postFeedback');
    axios({
        method: 'POST',
        url: '/feedback',
        data: {
          feeling: this.props.reduxState.feelingReducer,
          understanding: this.props.reduxState.understandingReducer,
          support: this.props.reduxState.supportReducer,
          comments: this.props.reduxState.commentReducer,
        }
      })
      .then((response) => {
        const action = {
          type: 'EMPTY'
        };
        this.props.dispatch(action);
        this.getFeedback();
      })
      .catch((error) => {
        console.log('ERROR in POST', error);
        alert(`Sorry! Unable to add your feedback. Try again later.`)
      })
  }


  getFeedback = () => {
    console.log('in getFeedback');
    axios({
        method: "GET",
        url: '/feedback'
      })
      .then((response) => {
        console.log('Response Data', response.data);
        this.setState({
          feedbackList: response.data
        })
      })
      .catch((error) => {
        console.log('ERROR in GET', error);
        alert(`Sorry! Unable to get feedback. Try again later.`);
      })
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path = "/" component={FeelingOne} />
            <Route exact path = "/Understanding2" component={UnderstandingTwo} />
            <Route exact path = "/Supported3" component={SupportedThree} />
            <Route exact path = "/Comments4" component={CommentsFour} />
            <Route path="/Review5" render = {(props) => <ReviewFive {...props} postFeedback={this.postFeedback}/>}/>
            <Route exact path = "/ThankYou6" component={ThankYouSix} />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);
