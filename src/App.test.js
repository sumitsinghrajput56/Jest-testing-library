import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import cleanDb from "./Service";

// beforeAll(()=>{
//   console.log("before all");
// })

// beforeEach(()=>{
//   console.log("before all");
// })


test("click event test case",() => {
  render(<App/>);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);

  expect(screen.getByText("update data")).toBeInTheDocument();
})


test("click event test case 1",() => {
  render(<App/>);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);

  expect(screen.getByText("update data")).toBeInTheDocument();
})

afterEach(()=>{
  console.log("after Each");
  cleanDb();
})

// afterAll(()=>{
//   console.log("after All");
// })