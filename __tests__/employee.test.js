const Employee = require('../lib/employee');

const employee = new Employee('bill', 34, 'bscheirer610@gmail.com');

it('should construct an employee object', () => {
    expect(typeof employee).toBe('object')
});

it('should yield the employees name with getName()', () => {
    expect(employee.getName()).toMatch(/bill/)
});

it('should yield the employee email with getEmail()', () => {
    expect(employee.getEmail()).toMatch(/bscheirer610@gmail.com/)
});

it('should yield the role "Employee" with getRole()', () => {
    expect(employee.getRole()).toMatch(/Employee/)
});