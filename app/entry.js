import VideoView from './views/video'
import VideoModel from './models/video'
import VideoReact from './views/videoreact.coffee'
import ReactDOM from 'react-dom';

window.onload = function() {
  var view = new VideoView({model: new VideoModel({id:2})});
  view.render();
}
