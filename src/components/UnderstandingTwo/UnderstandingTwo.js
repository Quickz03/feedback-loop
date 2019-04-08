import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../Header/Header';
import ReviewFive from '../ReviewFive/ReviewFive';




class UnderstandingTwo extends Component {

  state = {
    understanding: '',
  }

  handleChangeFor = (event) => {
    console.log('in HandleChange');
    this.setState({
      understanding: event.target.value
    })
  }

  handleClick = () => {
    // Dispatch an action to our reducers to update our redux store 
    const action = {
      type: "ADD_UNDERSTANDING",
      payload: this.state.understanding
    };
    this.props.dispatch(action);
    this.props.history.push('/Supported3');
  }

  render() {
    return (

      <div className="App">
          <section>
            <h1>How well are you understanding the content?</h1>
                <label>understanding?</label>
                <br/>
                  <input type="number" name="understanding" min="0" max="5"
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

export default connect(mapReduxStateToProps)(UnderstandingTwo);