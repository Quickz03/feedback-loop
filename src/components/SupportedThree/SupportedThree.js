import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../Header/Header';
import ReviewFive from '../ReviewFive/ReviewFive';




class SupportedThree extends Component {

  state = {
    supported: '',
  }

  handleChange = (event) => {
    console.log('in HandleChange');
    this.setState({
      supported: event.target.value
    })
  }

  handleClick = () => {
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
                <label>feeling?</label>
                <br/>
                  <input type="number" name="supported" min="0" max="5"
                      onChange={this.handleChange}></input>
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