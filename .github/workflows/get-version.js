(async () => {

    // https://github.com/semantic-release/semantic-release/issues/753#issuecomment-550977000
    const semanticRelease = require('semantic-release');
    const result = await semanticRelease({dryRun: true});


    if (result) {
        const {writeFileSync} = require('fs');
        writeFileSync('./version', result.nextRelease.version);
        writeFileSync('./artifact/release.json', JSON.stringify(result.nextRelease, null, '  '));
        console.log(`::set-output name=version::${result.nextRelease.version}`);
    } else {
        console.log(`::set-output name=version::`);
        process.exit(1);
    }
})();
