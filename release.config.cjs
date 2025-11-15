const configuration = {
    branches: [
        'main',
        {
            channel: 'next',
            name: 'develop',
            prerelease: true,
        },
    ],
    plugins: [],
};

configuration.plugins.push([
    '@semantic-release/commit-analyzer',
    {
        parserOpts: {
            noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
        releaseRules: [
            { release: 'patch', scope: 'deps', type: 'chore' },
            { release: 'patch', scope: 'package', type: 'chore' },
            { release: 'patch', scope: 'deps', type: 'build' },
            { release: 'patch', type: 'docs' },
        ],
    },
]);

configuration.plugins.push('@semantic-release/release-notes-generator');

if (process.env.BRANCH === 'main') {
    configuration.plugins.push('@semantic-release/changelog');
}

configuration.plugins.push('semantic-release-license');

configuration.plugins.push('@semantic-release/npm');

configuration.plugins.push([
    '@semantic-release/exec',
    {
        prepareCmd: './.github/workflows/build.sh',
    },
]);

configuration.plugins.push([
    '@semantic-release/github',
    {
        assignees: process.env.GH_OWNER,
        labels: false,
    },
]);

configuration.plugins.push([
    '@semantic-release/git',
    {
        assets: ['CHANGELOG.md', 'LICENSE'],
        message:
            'chore(release): :bookmark: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
]);

const dockerImages = [];
if (process.env.DOCKER_LOCAL_IMAGE_DH) {
    dockerImages.push(process.env.DOCKER_LOCAL_IMAGE_DH);
}
if (process.env.DOCKER_LOCAL_IMAGE_GH) {
    dockerImages.push(process.env.DOCKER_LOCAL_IMAGE_GH);
}
if (dockerImages.length > 0) {
    configuration.plugins.push([
        '@sebbo2002/semantic-release-docker',
        {
            images: dockerImages,
        },
    ]);
}

module.exports = configuration;
