const Engineer = require('../lib/engineer');

const engineer = new Engineer('bill', 34, 'bscheirer610@gmail.com', 'Engineer', 'n4n4k1');

it('should construct an engineer object', () => {
    expect(typeof engineer).toBe('object')
});

it('should yield the role "Engineer" with getRole()', () => {
    expect(engineer.getRole()).toMatch(/Engineer/)
});

it('should yield the github username with getGithub()', () => {
    expect(engineer.getGithub()).toMatch(/n4n4k1/)
});