module.exports = {
  defaults: {
    test: true,
    e2e: true,
    stories: false,
    vue: true,
    docs: true,
    store: false
  },
  fileHeader: {
    projectName: '{{ name }}'
  },
  files: {
    vue: {
      name: '',
      postfix: '',
      extension: 'vue',
      path: 'components/'
    },
    stories: {
      name: '',
      postfix: '',
      extension: 'stories.js',
      path: 'components/'
    },
    docs: {
      name: '',
      postfix: '',
      extension: 'stories.mdx',
      path: 'components/'
    },
    test: {
      name: '',
      postfix: '',
      extension: 'spec.js',
      path: 'components/'
    },
    e2e: {
      name: '',
      postfix: '',
      extension: 'test.js',
      path: 'components/'
    },
    store: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'store/'
    }
  },
  paths: {
    templateBase: '.ferdi',
    modulePath: '',
    pathOptions: {
      // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
      atomic: 'atomic/',
      modules: 'modules/'
    }
  }
};
