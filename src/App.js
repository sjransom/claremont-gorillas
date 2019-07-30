import React from 'react';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

import PlayerData from './data/playerData'
import Header from './components/Header'
import Players from './components/Players'

class App extends React.Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="container">
          <h3 className="page-title">Players</h3>
          <div className="player-list">
            {Object.keys(PlayerData).map(key => (
              <Players
                key={key}
                details={PlayerData[key]}
              />
            ))}
          </div>
        </section>
      </React.Fragment>
    )
  }  
}

export default App