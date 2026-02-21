import { render, screen } from "@testing-library/react";
import App from "./App";

test("writting test case to find test", () => {
  render(<App />);

  const text = screen.getByText("First react test case");

  expect(text).toBeInTheDocument();
});

test("writting test case to find some text", () => {
  render(<App />);

  const text = screen.getByText(/first/i);

  expect(text).toBeInTheDocument();
});

test.only("writting test case to find title", () => {
  render(<App />);

  const title = screen.getByTitle("zomato");

  expect(title).toBeInTheDocument();
});

test("test input box", () => {
  render(<App />);

  const textInput = screen.getByRole("textbox");
  expect(textInput).toBeInTheDocument();

  const placeholderInput = screen.getByPlaceholderText("input your name");
  expect(placeholderInput).toBeInTheDocument();

  expect(textInput).toHaveAttribute("name", "your name");
  expect(textInput).toHaveAttribute("type", "text");
});

describe("UI test cases group", () => {
  test("test case 1", () => {
    render(<App />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toHaveAttribute("name", "your name");
  });
  test("test case 2", () => {
    render(<App />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toHaveAttribute("name", "your name");
  });
  test("test case 3", () => {
    render(<App />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toHaveAttribute("name", "your name");
  });
});

describe("Api test cases group", () => {
  test("test case 1", () => {
    render(<App />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toHaveAttribute("name", "your name");
  });
  test("test case 2", () => {
    render(<App />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toHaveAttribute("name", "your name");
  });
  test("test case 3", () => {
    render(<App />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toHaveAttribute("name", "your name");
  });
  describe("inner describe test cases group", () => {
    test("test case 1", () => {
      render(<App />);
      const textInput = screen.getByRole("textbox");
      expect(textInput).toHaveAttribute("name", "your name");
    });
  });
});
