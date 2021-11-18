module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['article', 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'wip']
    ]
  }
}
