const dirTree = require(`directory-tree`);
const fs = require(`fs`);
const path = require(`path`);
const { matchers } = require(`jest-json-schema`);
expect.extend(matchers);
expect.extend({
  toBeValid(received, validator) {
    if (validator(received)) {
      return {
        message: () => `Email ${received} should NOT be valid`,
        pass: true
      };
    } else {
      return {
        message: () => `Email ${received} should be valid`,
        pass: false
      };
    }
  }
});
const schema = {
  properties: {
    emoji: { type: `string` },
    role: { type: `string` },
    introduction: { type: `string` },
    achievements: {
      type: `array`, items: {
        type: `string`
      }
    },
    links: {
      type: `object`,
      properties: {
        site: { type: `string` },
        linkedin: { type: `string` }
      }
    }
  },
  required: [`emoji`, `role`, `introduction`, `achievements`, `links`],
};

describe(`student json data schemas`, function () {
  test(`Validate JSON data`, () => {
    const semesters = dirTree(`${__dirname}/../_data/semesters`);
    for (let semester of semesters.children) {
      for (let student of semester.children) {
        let json;
        try {
          json = JSON.parse(fs.readFileSync(path.resolve(__dirname, `../_data/semesters/${semester.name}/${student.name}`), `utf8`));
        } catch (error) {
          fail(`Failed at ${semester.name}/${student.name}`)
        }
        expect(json).toMatchSchema(schema, `Failed at ${semester.name}/${student.name}`);
      }
    }
  });
});