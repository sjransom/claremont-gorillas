import React from 'react'

class Players extends React.Component {
  render() {
    const {name, image, age, position, appearences, goals} = this.props.details
    return (
      <div className="player">
        <p className="player__name">{name}</p>
        <img className="player__img" src={image} alt={name} />
        <p className="player__age"><span>Age:</span> {age}</p>
        <p className="player__position"><span>Position:</span> {position}</p>
        <p className="player__appearences"><span>Appearences:</span> {appearences}</p>
        <p className="player__goals"><span>Goals:</span> {goals}</p>
      </div>
    )
  }  
}

export default Players