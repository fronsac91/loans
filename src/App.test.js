import React from 'react';
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

configure({ adapter: new Adapter() });

describe("LendInvest loans <App/>", () => {
  it("should display balance info", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('p[data-testid="balance"]').text()).toEqual(
      "Total amount available for investments: £238,456"
    );
  });

});
