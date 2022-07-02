const Employee = require("../lib/Employee");

// to check object is created
test("is an object", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

// to check if name is passed in the object
test("getting name in object", () => {
  const emp = new Employee("test-name");
  expect(emp.name).toBe("test-name");
});

// to check if id is passed in the object
test("getting id in object", () => {
  const emp = new Employee("test-name", "test-id");
  expect(emp.id).toBe("test-id");
});

// to check if email is pssed in the object
test("getting email in object", () => {
  const emp = new Employee("test-name", "test-id", "test-email");
  expect(emp.email).toBe("test-email");
});

//to check if getName() method returns the name from object
test("getting name in objects method", () => {
  const emp = new Employee("test-name");
  expect(emp.getName()).toBe("test-name");
});

//to check if method getId() returns id
test("getting id in objects method", () => {
  const emp = new Employee("test-name", "test-id");
  expect(emp.getId()).toBe("test-id");
});

// to check if method getEmail() returns email
test("getting email in objects method", () => {
  const emp = new Employee("test-name", "test-id", "test-email");
  expect(emp.getEmail()).toBe("test-email");
});

// to check if method getRole() returns the role
test("getting role in objects method", () => {
  const emp = new Employee();
  expect(emp.getRole()).toBe("Employee");
});
