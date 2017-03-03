import { View } from 'backbone'
import VideoModel from '../models/video'
import Template from '../templates/video.hbs'
import Styles from '../templates/videostyles.css'

class VideoView extends View
  template: Template
  el: '#main'

  render: () ->
    @$el.html @template({
      styles: Styles
      model: @model.toJSON()})
    console.log('done')
    @

export default VideoView
