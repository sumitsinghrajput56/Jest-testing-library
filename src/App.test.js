import Users from "./Users";

test("class component method testing", () => {
  const instance = new Users();
  const a = "test";
  expect(instance.getUserList(a)).toBe(a);
});