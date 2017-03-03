import { Model } from 'backbone'

class VideoModel extends Model
  defaults:
    src: ''
    captions: 0
    title: 'The best Video'

export default VideoModel
