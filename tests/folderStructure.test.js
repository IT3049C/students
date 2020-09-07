const dirTree = require(`directory-tree`);

describe(`folder structure`, function () {
  test(`root directory is properly setup`, () => {
    const directoryTree = dirTree(`${__dirname}/..`);
    const nodes = directoryTree.children.map(node => node.name);

    expect(nodes).toContain(`_data`);
    expect(nodes).toContain(`_layouts`);
    expect(nodes).toContain(`scripts`);
    expect(nodes).toContain(`styles`);
    expect(nodes).toContain(`Gemfile`);
    expect(nodes).toContain(`index.html`);
    expect(directoryTree.children.length).toBeGreaterThanOrEqual(18);
  });

  test(`_data directory is properly setup`, () => {
    const directoryTree = dirTree(`${__dirname}/../_data`);
    const nodes = directoryTree.children.map(node => node.name);

    expect(nodes).toContain(`semesters`);
    expect(nodes).toContain(`instructor`);
    expect(directoryTree.children.length).toBe(2);
  });

  test(`scripts directory includes one index.js files`, () => {
    const directoryTree = dirTree(`${__dirname}/../_data/semesters`);
    const nodes = directoryTree.children.map(node => node.name);

    expect(nodes).toContain(`Fall 20`);
    expect(directoryTree.children.length).toBeGreaterThanOrEqual(1);
  });

  test(`scripts directory includes one index.js files`, () => {
    const directoryTree = dirTree(`${__dirname}/../_data/semesters/Fall 20`);
    const nodes = directoryTree.children.map(node => node.name);

    expect(nodes).toContain(`Bodensjr.json`);
    expect(directoryTree.children.length).toBeGreaterThanOrEqual(1);
  });



});
