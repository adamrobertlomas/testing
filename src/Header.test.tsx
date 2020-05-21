import React from "react";
import { render } from "@testing-library/react";
import HeaderOne from "./Header";

test("renders header with specified text", () => {
  const headerMessage: string = "Test message";

  const { getByTestId } = render(<HeaderOne text={headerMessage} />);
  const elem: HTMLElement = getByTestId("h1Text");

  expect(elem).toBeDefined();
  expect(elem.textContent).toBe(headerMessage);
});
