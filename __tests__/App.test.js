import React from "react";
import { shallow } from "enzyme";

import App from "pages/index.js";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

describe("<App />", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });
  it("Shows a <CommentBox/>", () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it("Shows a <CommentList/>", () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
