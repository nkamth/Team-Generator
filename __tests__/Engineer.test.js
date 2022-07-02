const Engineer = require("../lib/Engineer");

// to check object is created
test("is an object", () => {
  const eng = new Engineer();
  expect(typeof eng).toBe("object");
});

// to check if github username is passed in the object
test("getting github username in object", () => {
  const eng = new Engineer("test-name", "test-id", "test-email", "test-github");
  expect(eng.github).toBe("test-github");
});

//to check if getGithub() method returns the github username from object
test("getting github username in objects method", () => {
  const eng = new Engineer("test-name", "test-id", "test-email", "test-github");
  expect(eng.getGithub()).toBe("test-github");
});

// to check if method getRole() returns the role
test("getting role in objects method", () => {
  const eng = new Engineer();
  expect(eng.getRole()).toBe("Engineer");
});
