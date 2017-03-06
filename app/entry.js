import VideoView from './views/video'
import VideoModel from './models/video'
import VideoReact from './views/videoreact'
import ReactDOM from 'react-dom';

window.onload = function() {
  var view = new VideoView({model: new VideoModel({id:2})});
  view.render();

  var reactView = new VideoReact({model: new VideoModel({id:2})});
  ReactDOM.render(reactView, document.getElementById('reactmain'));
}
