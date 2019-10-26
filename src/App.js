import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Piece from './Piece/Piece';

class App extends Component {
  // state with our test pieces for the game and scores
  state = {
    pieces: [
      { id: '0', name: 'Kyle', clicked: false },
      { id: '1', name: 'Ghett', clicked: false },
      { id: '2', name: 'Will', clicked: false },
      { id: '3', name: 'Travis', clicked: false },
      { id: '4', name: 'Stephen', clicked: false },
      { id: '5', name: 'Ed', clicked: false },
      { id: '6', name: 'Ryan', clicked: false },
      { id: '7', name: 'Geno', clicked: false },
      { id: '8', name: 'Frank', clicked: false },
      { id: '9', name: 'Brian', clicked: false },
      { id: '10', name: 'Connor', clicked: false },
      { id: '11', name: 'Rebecca', clicked: false }
    ],
    score: 0,
    topScore: 0
  }

  // possible one event handler to contain both functions occuring on button click
  onClick (event) {
    event.preventDefault();

    this.arrayShuffle(this.state.pieces)
    this.gameLogic()
  }

  // function to shuffle the array around and re-render the game pieces (hopefully...)
  arrayShuffle (arr) {
    let currentIndex = arr.length, tempVal, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }
    this.setState( { pieces: arr } )
  }

  // primary logic behind the score system in the game
  gameLogic (index) {
    // grab variables from the state for easier reference
    let pieces = this.state.pieces
    // clicking an already-clicked button resets the score
    if (pieces[index].clicked === true) {
      this.setState( { score: 0 } )
    }
    // clicking a non-clicked button adds score and changes clicked to true (supposed to anyway)
    if (pieces[index].clicked === false) {
      let stateCopy = Object.assign({}, this.state)
      stateCopy.pieces[index].clicked = true
      stateCopy.score += 1
      stateCopy.topScore += 1
      this.setState( { stateCopy } )
    }
  }

  render () {

    return (
      <div className="App">
        <Header 
        score={this.state.score}
        topScore={this.state.topScore} />
        {this.state.pieces.map((piece, index) => {
          return <Piece 
            key={piece.id}
            name={piece.name}
            clicked={piece.clicked}
            onClick={() => this.gameLogic(index)} 
            />
        })} 
        <Footer />
      </div>
    );
  }
}

export default App;
