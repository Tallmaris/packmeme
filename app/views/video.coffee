import { View } from 'backbone'
import VideoModel from '../models/video'
import Template from '../templates/video.hbs'
import Styles from '../templates/videostyles.css'
import Koala from '../assets/images/Koala.jpg'

class VideoView extends View
  template: Template
  el: '#main'

  render: () ->
    @$el.html @template({
      styles: Styles
      assets: Koala
      model: @model.toJSON()})
    @

export default VideoView
