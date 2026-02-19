import sum from "./sum";

test("testing 2 argument in sum",() => {

    const a=10;
    const b=20;

    expect(sum(a,b)).toBe(30);
})