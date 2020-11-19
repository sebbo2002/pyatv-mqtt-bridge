const plugins = [
    ['@semantic-release/commit-analyzer', {
        'preset': 'angular',
        'releaseRules': [
            {'type': 'refactor', 'release': 'patch'},
            {'type': 'style', 'release': 'patch'},
            {'type': 'build', 'scope': 'deps', 'release': 'patch'},
            {'type': 'docs', 'release': 'patch'}
        ],
        'parserOpts': {
            'noteKeywords': ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
    }],
    ['@semantic-release/release-notes-generator', {
        'preset': 'angular',
        'parserOpts': {
            'noteKeywords': ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        },
        'writerOpts': {
            'commitsSort': ['subject', 'scope']
        }
    }],
    ['@semantic-release/exec', {
        'prepareCmd': 'npm run build'
    }],
    ['@semantic-release/changelog', {
        'changelogFile': 'CHANGELOG.md'
    }],
    '@semantic-release/npm',
    '@semantic-release/github'
];

if (process.env.BRANCH === 'main') {
    plugins.push(['@semantic-release/git', {
        'assets': ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        'message': 'chore(release): :bookmark: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }]);
}

module.exports = {
    'branches': [
        'main',
        {
            'name': 'develop',
            'channel': 'next',
            'prerelease': true
        }
    ],
    'plugins': plugins
};
