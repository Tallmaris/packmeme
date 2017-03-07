import { defaults as merge } from 'lodash'
import { View } from 'backbone'
import VideoModel from '../models/video'
import VideoReact from './videoreact.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import { StyleRoot } from 'radium'
//import Template from '../templates/video.hbs'
//import Styles from '../templates/videostyles.css'
//import Koala from '../assets/images/Koala.jpg'

class VideoView extends View {
  constructor(props) {
    super(merge(props,
      {
        el: '#main'
      })
    );
  }
  
  render() {
    ReactDOM.render(
     <StyleRoot>
       <VideoReact model={this.model} />
     </StyleRoot>
     , this.el);
    return this;
  }
}

export default VideoView
