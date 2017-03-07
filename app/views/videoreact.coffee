import { View } from 'backbone'
import VideoModel from '../models/video'
import VideoReact from './videoreact.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import { StyleRoot } from 'radium'
#import Template from '../templates/video.hbs'
#import Styles from '../templates/videostyles.css'
#import Koala from '../assets/images/Koala.jpg'

class VideoView extends View
  #template: Template
  el: '#main'

  render: () ->
    component = new VideoReact({ model: @model });
    ReactDOM.render(
      React.createElement(StyleRoot, {},
        React.createElement(VideoReact, { model: @model })
      ), @el);
    @

export default VideoView
