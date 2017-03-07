import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Radium from 'radium';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Video from '../app/views/videoreact.jsx';
import { Model } from 'backbone';

describe('Video', function() {
  describe('#render()', function() {
    it('should work', function() {
      Radium.TestMode.enable();
      var model = new Model({id:2, title:"HELLO!"});
      const component = shallow(<Video model={model} />);
      //console.log(component.find('h2').text());
      expect(component.find('h2').text()).to.equal('HELLO!');
    });
  });
});
