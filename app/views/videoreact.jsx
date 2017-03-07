import React from 'react'
import Radium from 'radium'
import style from '../templates/videostyles.js'
//import Koala from '../assets/images/Koala.jpg'
import { Model } from 'backbone'

class VideoReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h2 style={Object.assign({},
            style,
            this.props.fontSize && { fontSize: this.props.fontSize })
      }>
        {this.props.model.get('title')}
      </h2>
      <img className="hvr-grow-rotate" style={{width: 300}} src={require('../assets/images/Koala.jpg')} />
    </div>
  }
}

VideoReact.propTypes = {
  model: React.PropTypes.instanceOf(Model).isRequired,
  fontSize: React.PropTypes.number,
}

export default Radium(VideoReact)
