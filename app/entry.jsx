import VideoView from './views/video'
import VideoModel from './models/video'
import VideoReact from './views/videoreact'
import React from 'react'
import ReactDOM from 'react-dom';

window.onload = function() {
  var model = new VideoModel({id:2});
  // var view = new VideoView({model: model});
  // view.render();

  //var reactView = new VideoReact({model: new VideoModel({id:2})});
  ReactDOM.render(<VideoReact model={model} />, document.getElementById('reactmain'));
}
