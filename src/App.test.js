import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Cookies from './components/cookies'
import DownloadApp from './components/downloadApp'
import Enter from './components/enter'
import Location from './components/location'
import SetHomepage from './components/setHomepage'
import Subscribe from './components/subscribe'

Enzyme.configure({ adapter: new Adapter() });

describe('<Enter />', () => {
  it ('state is correctly set', () => {
    const wrapper = shallow(<Enter />);
    expect(wrapper.state().subscribeModalIsOpen).to.equal(false);
    expect(wrapper.state().modalIsOpen).to.equal(true);
  });
  it('calls componentDidMount', () => {
    sinon.spy(Enter.prototype, 'componentDidMount');
    const wrapper = mount(<Enter />);
    expect(Enter.prototype.componentDidMount).to.have.property('callCount', 1);
    Enter.prototype.componentDidMount.restore();
  });
})

describe('<Subscribe />', () => {
  it ('state is correctly set', () => {
    const wrapper = shallow(<Subscribe />);
    expect(wrapper.state().showCookies).to.equal(false);
    expect(wrapper.state().modalIsOpen).to.equal(true);
  });
})

describe('<Cookies />', () => {
  it ('state is correctly set', () => {
    const wrapper = shallow(<Cookies />);
    expect(wrapper.state().showCookies).to.equal(true);
    expect(wrapper.state().showLocation).to.equal(false);
  });
  it('renders component', () => {
    const wrapper = shallow(<Cookies show="true"/>);
    expect(wrapper.find('.cookies')).to.have.lengthOf(1);
  });
  it('renders Location component if show prop is not true', () => {
    const wrapper = shallow(<Cookies />);
    expect(wrapper.find(Location)).to.have.lengthOf(1);
  });
})

describe('<Location />', () => {
  it ('state is correctly set', () => {
    const wrapper = shallow(<Location />);
    expect(wrapper.state().showLocation).to.equal(true);
    expect(wrapper.state().showSetHomepage).to.equal(false);
  });
  it('renders component', () => {
    const wrapper = shallow(<Location show="true"/>);
    expect(wrapper.find('.location-alert')).to.have.lengthOf(1);
  });
  it('renders SetHomepage component if show prop is not true', () => {
    const wrapper = shallow(<Location />);
    expect(wrapper.find(SetHomepage)).to.have.lengthOf(1);
  });
})

describe('<SetHomepage />', () => {
  it ('state is correctly set', () => {
    const wrapper = shallow(<SetHomepage />);
    expect(wrapper.state().showSetHomepage).to.equal(true);
    expect(wrapper.state().showDownloadApp).to.equal(false);
  });
  it('renders component', () => {
    const wrapper = shallow(<SetHomepage show="true"/>);
    expect(wrapper.find('.set-homepage-alert')).to.have.lengthOf(1);
  });
  it('renders SetHomepage component if show prop is not true', () => {
    const wrapper = shallow(<SetHomepage />);
    expect(wrapper.find(DownloadApp)).to.have.lengthOf(1);
  });
})

describe('<DownloadApp />', () => {
  it ('state is correctly set', () => {
    const wrapper = shallow(<DownloadApp />);
    expect(wrapper.state().showDownloadApp).to.equal(true);
    expect(wrapper.state().NEXTCOMPONENT).to.equal(false);
  });
  it('renders component', () => {
    const wrapper = shallow(<DownloadApp show="true"/>);
    expect(wrapper.find('.cookies')).to.have.lengthOf(1);
  });
  // it('renders SetHomepage component if show prop is not true', () => {
  //   const wrapper = shallow(<DownloadApp />);
  //   expect(wrapper.find(DownloadApp)).to.have.lengthOf(1);
  // });
})
