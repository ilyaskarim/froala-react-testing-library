import React from "react";
import { render, cleanup } from "@testing-library/react";
import FroalaEditor from "react-froala-wysiwyg";

afterEach(cleanup);

describe("RTE", () => {
  it("renders RTE", () => {
    render(<FroalaEditor />);
  });
});

