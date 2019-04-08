import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../Header/Header';
import ReviewFive from '../ReviewFive/ReviewFive';



class FeelingOne extends Component {

  state = {
    feeling: '',
  }

  // runs the handlechange function to submit the data of the value in the input
  handleChangeFor = (event) => {
    console.log('in HandleChange');
    this.setState({
      feeling: event.target.value
    })
  }

  handleClick = () => {
    // Dispatch an action to our reducers to update our redux store 
    const action = {
      type: "ADD_FEELINGS",
      payload: this.state.feeling
    };
    this.props.dispatch(action);
    this.props.history.push('/Understanding2');
  }

  render() {
    return (
      <div className="App">
          <section>
            <h1>How are you feeling today?</h1>
                <label>feeling? 1-5</label>
                <br/>
                  <input type="number" name="feeling" min="0" max="5"
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

export default connect(mapReduxStateToProps)(FeelingOne);