const Intern = require("../lib/Intern");

// to check object is created
test("is an object", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});

// to check if school name is passed in the object
test("getting school name in object", () => {
  const intern = new Intern(
    "test-name",
    "test-id",
    "test-email",
    "test-school"
  );
  expect(intern.school).toBe("test-school");
});

//to check if getSchool() method returns the school name from object
test("getting school name in objects method", () => {
  const intern = new Intern(
    "test-name",
    "test-id",
    "test-email",
    "test-school"
  );
  expect(intern.getSchool()).toBe("test-school");
});

// to check if method getRole() returns the role
test("getting role in objects method", () => {
  const intern = new Intern();
  expect(intern.getRole()).toBe("Intern");
});
