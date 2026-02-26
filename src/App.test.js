import { render, screen } from "@testing-library/react";
import App from "./App";

test("test case for single input field", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("enter username");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("anil");
});
