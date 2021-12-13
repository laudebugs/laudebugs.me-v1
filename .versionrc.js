module.exports = {
  types: [
    { type: '✨feat', section: '✨ Features & New Stuff' },
    { type: ':bug: fix', section: '🐛 Bug Fixes' },
    { type: ':truck: chore', section: '🚚 Other Updates' },
    { type: ':memo: docs', section: 'Documentation' },
    { type: ':lipstick: style', section: '💄 Style Changes' },
    { type: ':recycle: refactor', hidden: '📦 Refactors' },
    { type: ':zap: perf', section: '⚡️ Performance Improvemtns' },
    { type: ':alembic: test', hidden: true }
  ],
  commitUrlFormat: 'https://github.com/lbugasu/sandstorm/commits/{{hash}}',
  compareUrlFormat: 'https://github.com/lbugasu/sandstorm/compare/{{previousTag}}...{{currentTag}}',
  issuePrefixes: ['TEST-'],
  issueUrlFormat: 'https://myBugTracker.com/{{prefix}}{{id}}'
}
