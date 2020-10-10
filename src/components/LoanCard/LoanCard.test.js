import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import LoanCard from "./LoanCard";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("LoanCard <LoanCard/>", () => {
  const loan = {
    "id": "12",
    "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
    "tranche": "C",
    "available": 12359,
    "annualised_return": "4.80",
    "term_remaining": 879000,
    "ltv": "48.80",
    "amount": 85754
  };

  it("should display loan title and details", () => {
    const wrapper = mount(<LoanCard loan={loan}/>);
    expect(wrapper.find("h2").text()).toEqual(loan.title);
  });
});
