import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />); // not needed for this test but good example
});

afterEach(() => {
  wrapped.unmount(); // REQUIRED have to clean up mounted components
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("<textarea />", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment"
      }
    });
    wrapped.update(); //need to force render to see changes
  });

  it("has textarea that user can type it", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment"); // get props and compare
  });

  it("clears textarea when submitted", () => {
    wrapped.find("form").simulate("submit"); // have to simulate submit event for form not button...

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
