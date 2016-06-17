import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { declareIncorrect, declareCorrect, skipClue } from '../sockets_client';

class HostAnswer extends Component{
  constructor(props){
    super(props);
    this.state= {
      incorrectClickCount: 0
    }
    //this.skipCurrentClue= this.skipCurrentClue.bind(this);
    this.handleIncorrectClick= this.handleIncorrectClick.bind(this);
    this.handleCorrectClick= this.handleCorrectClick.bind(this);
  }
  // skipCurrentClue(){
  //   skipClue(this.props.room, this.props.activeClue);
  // }

  // skipIncorrect() {
  //   skipClue(this.props.room, this.props.activeClue);
  //   declareIncorrect(this.props.activeUser, this.props.room, this.props.activeClue);
  // }

  handleIncorrectClick(){
    this.state.incorrectClickCount ++;
    declareIncorrect(this.props.activeUser, this.props.room, this.props.activeClue);
    const incorrect = new Audio('http://www.qwizx.com/gssfx/usa/j64-outtatime.wav');
    incorrect.play();
    // clearTimeout(this.initalTimeout);
    // if (this.state.incorrectClickCount === this.props.userCount){
    //   this.skipCurrentClue();
    // }
    // if (this.state.incorrectClickCount !== this.props.userCount){
    //   var incorrectTimeout= setTimeout(this.skipIncorrect, 10000);
    // }
  }

  handleCorrectClick(){
    console.log('inside HostAnswer line 38;');
    declareCorrect(this.props.activeUser, this.props.room, this.props.activeClue);
    const correct = new Audio('http://www.qwizx.com/gssfx/usa/j64-ringin.wav');
    correct.play();
    //clearTimeout(this.initialTimeout);
  }

  // componentDidMount(){
  //   var initialTimeout= setTimeout(this.skipCurrentClue, 10000);
  // }

  // componentDidUpdate(){
  //   clearTimeout(this.incorrectTimeout);
  // }

  // componentDidUnMount(){
  //   clearTimeout(this.incorrectTimeout);
  // }

  render(){
    return(
      <div>
        <div>
        {this.props.activeUser}
        </div>
        <div>
        {this.props.activeClue.answer}
        </div>
        <div>
          <Link to= '/hostgameplay'>
            <button className="join btn btn-primary" onClick={this.handleCorrectClick}>Correct</button>
          </Link>
          <button className="join btn btn-primary" onClick={this.handleIncorrectClick}>Incorrect</button>
        </div>
      </div>

    );
  }
}

//update return statement to point to correct property on activeClue
function mapStateToProps(state){
  return {
    activeClue: state.gameplay.activeClue,
    activeUser: state.gameplay.activeUser,
    room: state.linkAuth.linkCode,
    usersCount: state.user.count,
  };
}

export default connect(mapStateToProps)(HostAnswer);
