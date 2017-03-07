import VideoView from './views/video'
import VideoModel from './models/video'
import VideoCoffee from './views/videoreact.coffee'
import VideoBack from './views/videobackbone'
//import VideoShadow from './views/videoshadow'
import { StyleRoot } from 'radium'
import React from 'react'
import ReactDOM from 'react-dom'

function run() {
  var model = new VideoModel({id:2});
  var view = new VideoBack({model: model});
  view.render();

  //var reactView = new VideoReact({model: new VideoModel({id:2})});
  // ReactDOM.render(
  //   <StyleRoot>
  //     <VideoShadow model={model} />
  //   </StyleRoot>
  //   , document.getElementById('reactmain'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
