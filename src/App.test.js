import { render, screen } from "@testing-library/react";
import App from "./App"


test("testing with test id",()=>{
  render(<App/>);
  const divId = screen.getByTestId("div-test-id");
  expect(divId).toBeInTheDocument();
})

test("testing with test id h1",()=>{
  render(<App/>);
  const divId = screen.getByTestId("div-test-id-h2");
  expect(divId).toBeInTheDocument();
})