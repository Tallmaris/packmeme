import VideoView from './views/video'
import VideoModel from './models/video'

window.onload = function() {
  var view = new VideoView({model: new VideoModel({id:2})});
  view.render();
  //document.getElementsByTagName('body').appendChild = view.render().el.firstChild;
}
