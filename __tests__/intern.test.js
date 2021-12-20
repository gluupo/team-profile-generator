const Intern = require('../lib/intern');

const intern = new Intern('bill', 34, 'bscheirer610@gmail.com', 'Intern', 'berkley');

it('should construct an intern object', () => {
    expect(typeof intern).toBe('object')
});

it('should yield the role "Intern" with getRole()', () => {
    expect(intern.getRole()).toMatch(/Intern/)
});

it("should yield the intern's school with getSchool()", () => {
    expect(intern.getSchool()).toMatch(/berkley/);
});