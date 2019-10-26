import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Piece from './Piece/Piece';
import pieces from './pieces.json'

class App extends Component {
  // state with our test pieces for the game and scores
  constructor (props) {

      super(props);
      this.state = 
      { 
        pieces: pieces,
        score: 0,
        topScore: 0
      }
      this.clickChecker = this.clickChecker.bind(this)
  }

  // function to shuffle the array around and re-render the game pieces (hopefully...)
  shuffle () {
    const pieces = this.state.pieces.sort(() => .5 - Math.random())
    this.setState( { pieces } )
  }

  componentDidMount () {
    this.shuffle();
  }
  // primary logic behind the score system in the game
  clickChecker = id => {
    let clickedPiece = this.state.pieces.filter(piece => piece.id === id)[0]
    let piecesCopy = this.state.pieces.slice().sort(() => .5 - Math.random())

    if (!clickedPiece.clicked) {
      clickedPiece.clicked = true;
      piecesCopy[piecesCopy.findIndex(piece => piece.id === id)] = clickedPiece;

      this.setState({ 
        pieces: piecesCopy, 
        score: this.state.score + 1,
        topScore: (this.state.score +1 > this.state.topScore ? this.state.score +1 : this.state.topScore)
      })
    }
    else {
      let resetCopy = piecesCopy.map(piece => {
        return {
          id: piece.id,
          name: piece.name,
          clicked: false
        }
      })
      this.setState({
        pieces: resetCopy, score: 0
      })
    }
  }
  
  render () {

    return (
      <div className="App">
        <Header 
        score={this.state.score}
        topScore={this.state.topScore} />
        {this.state.pieces.map((piece, id) => {
           return <Piece
            key={piece.id}
            id={piece.id}
            name={piece.name}
            clicked={piece.clicked}
            click={this.clickChecker}
            />
        })} 
        <Footer />
      </div>
    );
  }
}

export default App;
