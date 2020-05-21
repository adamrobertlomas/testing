import React from "react";
import { Given, Then, Before } from "cucumber";
import { render, RenderResult } from "@testing-library/react";
import HeaderOne from "../../src/Header";
import { default as expect } from "expect";

const headerMessage: string = "Test message";
let container: RenderResult;

Before(() => {
  container = render(<HeaderOne text={headerMessage} />);
});

Given("The Header component is called", () => {
  const elem: HTMLElement = container.getByTestId("h1Text");

  expect(elem).toBeDefined();
});

Then("The h1 text is displayed correctly", () => {
  const elem: HTMLElement = container.getByTestId("h1Text");

  expect(elem.textContent).toBe(headerMessage);
});
