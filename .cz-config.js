module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ feat:\tAdding a new feature' },
    { value: ':bug: fix', name: '🐛 fix:\tFixing a bug' },
    { value: ':memo: docs', name: '📝 docs:\tAdd or update documentation' },
    {
      value: ':lipstick: style',
      name: '💄 style:\tAdd or update styles, ui or ux'
    },
    {
      value: ':recycle: refactor',
      name: '📦  refactor:\tCode change that neither fixes a bug nor adds a feature'
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tCode change that improves performance'
    },
    {
      value: ':alembic: test',
      name: '⚗️ test:\tAdding tests cases'
    },
    {
      value: ':truck: chore',
      name: '🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation'
    },
    { value: ':rewind: revert', name: '🗑 revert:\tRevert to a commit' },
    { value: ':construction: wip', name: '🚧 wip:\tWork in progress' },
    {
      value: ':building_construction: build',
      name: '🏗️ build:\tAdd or update regards to build process'
    },
    {
      value: ':wrench: ci',
      name: '🔧 ci:\tAdd or update regards to build process'
    },
    {
      value: ':bulb: article',
      name: '💡 article:\tAn Article or Blog Post'
    }
  ],

  // scopes: [{ name: 'ui' }, { name: 'app' }, { name: 'blog' }, { name: 'article' }, { name: '*' }],

  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }]
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],
  subjectLimit: 100
}
