import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../Header/Header';
import ReviewFive from '../ReviewFive/ReviewFive';




class CommentsFour extends Component {

  state = {
    comments: '',
  }

  handleChangeFor = (event) => {
    console.log('in HandleChange');
    this.setState({
      comments: event.target.value
    })
  }

  handleClick = () => {
    // Dispatch an action to our reducers to update our redux store 
    const action = {
      type: "ADD_COMMENT",
      payload: this.state.comments
    };
    this.props.dispatch(action);
    this.props.history.push('/Review5');
  }

  render() {
    return (

      <div className="App">
          <section>
            <h1>Any comments you want to leave?</h1>

                <label>comments?</label>
                <br/>
                  <input type="text" name="comments" 
                      onChange={this.handleChangeFor}></input>
                        <button onClick={this.handleClick}>Next</button>

            <ReviewFive />
          </section>
        <br/>
      </div>
    
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(CommentsFour);