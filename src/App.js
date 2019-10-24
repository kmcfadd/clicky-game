import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Piece from './Piece/Piece';

class App extends Component {

  state = {
    pieces: [
      { id: '1', name: 'Kyle' },
      { id: '2', name: 'Ghett' },
      { id: '3', name: 'Will' },
      { id: '4', name: 'Travis' },
      { id: '5', name: 'Stephen' },
      { id: '6', name: 'Ed' },
      { id: '7', name: 'Ryan' },
      { id: '8', name: 'Geno' },
      { id: '9', name: 'Frank' },
      { id: '10', name: 'Brian' },
      { id: '11', name: 'Connor' },
      { id: '12', name: 'Rebecca' }
    ]
  }

  render () {

    return (
      <div className="App">
        <Header />
        {this.state.pieces.map((piece, index) => {
          return <Piece 
            key={piece.id}
            name={piece.name} />
        })} 
        <Footer />
      </div>
    );
  }
}

export default App;
