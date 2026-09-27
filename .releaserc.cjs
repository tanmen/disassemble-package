module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', {
      "pkgRoot": "dist"
    }],
    ['@semantic-release/github', {
      // Releases are mostly Dependabot PRs; a comment + label on each is noise, and the
      // first release after the gap would hit ~270 PRs (past the secondary rate limit).
      "successComment": false,
      "releasedLabels": false,
    }],
  ],
};
