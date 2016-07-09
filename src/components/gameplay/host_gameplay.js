import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activateButtons } from '../../sockets_client';
import HostCategory from './host_category';

class HostGamePlay extends Component {
  constructor(props){
    super(props)
    this.state = { categories: [] , clues: []};
    this.handleQuestionLength = this.handleQuestionLength.bind(this);
  }
  componentDidMount() {
    if(this.props.categories !== null){
      let clues = this.props.clues;
      let tempCategories= this.props.categories.map((category, index) => {
          return <HostCategory 
                  key={index}
                  category={category}
                  clues={clues.splice(0,5)}/>
      });
      this.setState({categories: tempCategories});
    }
  }
  componentWillReceiveProps() {
    if(this.props.categories !== null){
      let clues = this.props.clues;
      let tempCategories= this.props.categories.map((category, index) => {
          return <HostCategory 
                  key={index}
                  category={category}
                  setActiveClues={this.handleSetActiveClues.bind(this)}
                  clues={clues.splice(0,5)}/>
      });
      this.setState({categories: tempCategories});
    }
  }
  handleSetActiveClues(clues) {
    this.setState({})
  }
  handleClick(){
    activateButtons(this.props.room);
  }
  handleQuestionLength(){
    var tempQuestion = this.props.activeClue.question.split(' ');
    var flag = false;
    if (tempQuestion.length === 1 && tempQuestion[0].indexOf(',') !== -1){
      tempQuestion= this.props.activeClue.question.split(',');
      flag = true;
    }
    var results = [];
    var tempResults = [];
    if (tempQuestion.length < 7){
      if (flag){
      return tempQuestion.join(', ');
      }
      return tempQuestion.join(' ');
    }
    else{
      for (var i= 0; i< tempQuestion.length; i++){
        tempResults.push(tempQuestion[i]);
        if (tempResults.length % 7 === 0){
          results.push(<div>{tempResults.join(' ')}<br/></div>);
          tempResults= [];
        }
      }
      if (tempResults.length > 0){
        results.push(<div>{tempResults.join(' ')}</div>);
      }
      return results;
    }
  }
  render(){
    return (
      <div className= 'gameplay-view'>
      {this.props.isGameActive === false ?
        <div className="waitingGame animated infinite flash">
          Waiting for game to Begin...
        </div> :
        Object.keys(this.props.activeClue).length > 0 ?
        <div>
          <div className= 'host-gameplay-question'>
          {this.handleQuestionLength()}
          </div>
          <div className="buttons-question animated infinite flash">
            <Link to='/hostanswer'>
              <a onClick={this.handleClick.bind(this)} className="button1 a animated infinite pulse" id="activateUsers">Activate Users</a>
            </Link>
          </div>
        </div>:
        <div className="categories">
          {this.state.categories}
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    isGameActive: state.gameplay.isGameActive,
    activeClue: state.gameplay.activeClue,
    room: state.linkAuth.linkCode,
    categories: state.gameboard.categories,
    clues: state.gameboard.clues,
  };
}


export default connect(mapStateToProps)(HostGamePlay)

