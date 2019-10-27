import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import heroes from './heroes.json'
import Background from './images/heroesbg.jpg';

class App extends Component {
  // state with our test heroes for the game and scores
  constructor (props) {

      super(props);
      this.state = 
      { 
        heroes: heroes,
        score: 0,
        topScore: 0
      }
      this.clickChecker = this.clickChecker.bind(this)
  }

  // function to shuffle the array around and re-render the game heroes (hopefully...)
  shuffle () {
    const heroes = this.state.heroes.sort(() => .5 - Math.random())
    this.setState( { heroes } )
  }

  componentDidMount () {
    this.shuffle();
  }
  // primary logic behind the score system in the game
  clickChecker = id => {
    let clickedhero = this.state.heroes.filter(hero => hero.id === id)[0]
    let heroesCopy = this.state.heroes.slice().sort(() => .5 - Math.random())

    if (!clickedhero.clicked) {
      clickedhero.clicked = true;
      heroesCopy[heroesCopy.findIndex(hero => hero.id === id)] = clickedhero;

      this.setState({ 
        heroes: heroesCopy, 
        score: this.state.score + 1,
        topScore: (this.state.score +1 > this.state.topScore ? this.state.score +1 : this.state.topScore)
      })
    }
    else {
      let resetCopy = heroesCopy.map(hero => {
        return {
          id: hero.id,
          name: hero.name,
          image: hero.image,
          clicked: false
        }
      })
      this.setState({
        heroes: resetCopy, score: 0
      })
    }
  }
  
  render () {

    const wrapper = {
      paddingTop: "50px",
      paddingBottom: "50px",
      margin: "0 auto",
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover'
  }

    return (
      <div className="App">
        <Header 
        score={this.state.score}
        topScore={this.state.topScore} 
        />
      <div style={wrapper}>
        {this.state.heroes.map((hero, id) => {
           return <Hero
            key={hero.id}
            id={hero.id}
            name={hero.name}
            image={require(`${hero.image}`)}
            clicked={hero.clicked}
            click={this.clickChecker}
            />
        })} 
      </div>
        <Footer />
      </div>
    );
  }
}

export default App;
