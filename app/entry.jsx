import VideoView from './views/video'
import VideoModel from './models/video'
import VideoReact from './views/videoreact'
import { StyleRoot } from 'radium'
import React from 'react'
import ReactDOM from 'react-dom'

window.onload = function() {
  var model = new VideoModel({id:2});
  // var view = new VideoView({model: model});
  // view.render();

  //var reactView = new VideoReact({model: new VideoModel({id:2})});
  ReactDOM.render(
    <StyleRoot>
      <VideoReact model={model} />
    </StyleRoot>
    , document.getElementById('reactmain'));
}
