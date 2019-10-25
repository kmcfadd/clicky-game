import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Piece from './Piece/Piece';

class App extends Component {

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

  onClick (event) {
    event.preventDefault();

    this.arrayShuffle(this.state.pieces)
    this.gameLogic()
  }

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

  gameLogic (index) {

    const pieces = this.state.pieces

    if (pieces[index].clicked === true) {
      this.setState( { score: 0 } )
    }
    if (pieces[index].clicked === false) {
      this.setState( { score: +1, topScore: +1 } )
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
