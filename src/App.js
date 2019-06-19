import React from 'react';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import Header from './components/Header'
import Players from './components/Players'

class App extends React.Component {
  state = {
    players: {
      player1: {
        name: "Sam Ransom",
        image: "/images/footballer.jpg",
        age: 29,
        position: "Right back",
        appearences: 9,
        goals: 0
      },
      player2: {
        name: "Adam Burns",
        image: "/images/footballer.jpg",
        age: 32,
        position: "Attacking mildfielder",
        appearences: 11,
        goals: 2
      },
      player3: {
        name: "Matt Clark",
        image: "/images/footballer.jpg",
        age: 28,
        position: "Central midfielder",
        appearences: 19,
        goals: 6
      },
      player4: {
        name: "Ollie Smith",
        image: "/images/footballer.jpg",
        age: 28,
        position: "Goalkeeper",
        appearences: 15,
        goals: 0
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="container">
          <h3 className="page-title">Players</h3>
          <div className="player-list">
            {Object.keys(this.state.players).map(key => (
              <Players
                key={key}
                details={this.state.players[key]}
              />
            ))}
          </div>
        </section>
      </React.Fragment>
    )
  }  
}

export default App