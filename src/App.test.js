import { render, screen } from "@testing-library/react";
import App from "./App";

test("writting test case to find test",() => {

  render(<App/>);

  const text = screen.getByText("First react test case");

  expect(text).toBeInTheDocument();
})

test("writting test case to find some text",() => {

  render(<App/>);

  const text = screen.getByText(/First /i);

  expect(text).toBeInTheDocument();
})

test("writting test case to find title",() => {

  render(<App/>);

  const title = screen.getByTitle("zomato");

  expect(title).toBeInTheDocument();
})