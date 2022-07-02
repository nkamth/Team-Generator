const Manager = require("../lib/Manager");

// to check object is created
test("is an object", () => {
  const mang = new Manager();
  expect(typeof mang).toBe("object");
});

// to check if office number is passed in the object
test("getting office number in object", () => {
  const mang = new Manager("test-name", "test-id", "test-email", "test-number");
  expect(mang.officeNumber).toBe("test-number");
});

//to check if getGithub() method returns the office number from object
test("getting office number in objects method", () => {
  const mang = new Manager("test-name", "test-id", "test-email", "test-number");
  expect(mang.getOfficeNumber()).toBe("test-number");
});

// to check if method getRole() returns the role
test("getting role in objects method", () => {
  const mang = new Manager();
  expect(mang.getRole()).toBe("Manager");
});
