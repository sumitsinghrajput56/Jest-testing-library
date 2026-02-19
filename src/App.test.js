import { render, screen } from "@testing-library/react";
import App from "./App";

test("writting test case to find test",() => {

  render(<App/>);

  const text = screen.getByText("First react test case");

  expect(text).toBeInTheDocument();
})