import React from 'react'
import style from '../templates/videostyles.css'
import Koala from '../assets/images/Koala.jpg'
import { Model } from 'backbone'

class VideoReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h2 className={style.big}>{this.props.model.get('title')}</h2>
      <img style={{width: 300}} src={Koala} />
    </div>
  }
}

VideoReact.propTypes = {
  model: React.PropTypes.instanceOf(Model).isRequired
}

export default VideoReact
