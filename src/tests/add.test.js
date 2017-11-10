const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("adds a and b", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('generates a greeting', () => {
  const result = generateGreeting('billy');
  expect(result).toBe('Hello billy!')
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
