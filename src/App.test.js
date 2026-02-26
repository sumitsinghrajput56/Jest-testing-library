import { render, screen } from "@testing-library/react";
import App from "./App";

test("single button testing", () => {
  render(<App />);
  const btn = screen.getByText("Login");
  expect(btn).toBeInTheDocument();

});

test("p teg testing", () => {
  render(<App />);
  const btn = screen.getByText("p teg testing");
  expect(btn).toBeInTheDocument();

});

test("multiple heading testing", () => {
  render(<App />);
  const h1Teg = screen.getAllByText("heading");

  for(let i=0;i<h1Teg.length;i++)
  {
  expect(h1Teg[0]).toBeInTheDocument();

  }

});
