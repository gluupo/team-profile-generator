const Manager = require('../lib/manager');

const manager = new Manager('bill', 34, 'bscheirer610@gmail.com', 'Manager', 20);

it('should construct a manager object', () => {
    expect(typeof manager).toBe('object')
});

it('should yield the role "Manager" with getRole()', () => {
    expect(manager.getRole()).toMatch(/Manager/)
});

it("should yield the manager's office number with getOfficeNumber()", () => {
    expect(manager.getOfficeNumber()).toBe(20)
});