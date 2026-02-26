import { render, screen } from "@testing-library/react";
import App from "./App"


test("testing with test id",()=>{
  render(<App/>);
  const divId = screen.getAllByTestId("div-test-id");
  for(var i=0;i<divId.length;i++)
  {
  expect(divId[i]).toBeInTheDocument();

  }
})

test("testing with test id h1",()=>{
  render(<App/>);
  const divId = screen.getByTestId("div-test-id-h2");
  expect(divId).toBeInTheDocument();
})