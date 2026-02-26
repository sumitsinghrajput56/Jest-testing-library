import { render, screen } from "@testing-library/react";
import App from "./App";

// test("test case for single input field", () => {
//   render(<App />);
//   const input = screen.getByPlaceholderText("enter username");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("anil");
// });

test("test case for multiple input fields", () => {
  render(<App />);
  const input = screen.getAllByPlaceholderText("enter username");

  for (let i = 0; i < input.length; i++) {
    expect(input[i]).toBeInTheDocument();
    expect(input[i]).toHaveValue("anil");
  }
});
