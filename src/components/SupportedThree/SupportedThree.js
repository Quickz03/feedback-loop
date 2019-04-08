import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../Header/Header';
import ReviewFive from '../ReviewFive/ReviewFive';




class SupportedThree extends Component {

  state = {
    supported: '',
  }

  // runs the handlechange function to submit the data of the value in the input
  handleChangeFor = (event) => {
    console.log('in HandleChange');
    this.setState({
      supported: event.target.value
    })
  }

  handleClick = () => {
    // Dispatch an action to our reducers to update our redux store 
    const action = {
      type: "ADD_SUPPORT",
      payload: this.state.supported
    };
    this.props.dispatch(action);
    this.props.history.push('/Comments4');
  }

  render() {
    return (

      <div className="App">
          <section>
            <h1>How well are ytou being supported?</h1>
                <label>feeling? 1-5</label>
                <br/>
                  <input type="number" name="supported" min="0" max="5"
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

export default connect(mapReduxStateToProps)(SupportedThree);