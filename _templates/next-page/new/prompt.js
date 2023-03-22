module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve) => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'project',
            default: 'kitchensink',
            message: 'App Name? e.g "kitchensink"',
          },
          {
            type: 'input',
            name: 'path',
            message: 'relative to the app root, e.g. "src/app/"',
          },
        ])
        .then(({ path, project }) => {
          resolve({
            appPath: `apps/${project}/src/app/${path}`,
          });
        });
    });
  },
};
