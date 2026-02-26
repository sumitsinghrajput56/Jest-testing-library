import { configure, render, screen } from "@testing-library/react";
import App from "./App"
configure({testIdAttribute:"element-id"})


test("overriding data test-id",()=>{
  render(<App/>);
  const divElement = screen.getByTestId("test-div");
  expect(divElement).toBeInTheDocument();

})

