const crypto = require('crypto');
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Usage: npm run hash <filePath> <algorithm>');
    process.exit(1);
}

const filePath = args[0];
const algorithm = args[1];

const supportedAlgorithms = ['md5', 'sha1', 'sha256', 'sha512'];

if (!supportedAlgorithms.includes(algorithm)) {
    console.error(`Unsupported algorithm. Supported algorithms: ${supportedAlgorithms.join(', ')}`);
    process.exit(1);
}

function getHash(filePath, algorithm) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash(algorithm);
        const stream = fs.createReadStream(filePath);

        stream.on('data', (data) => hash.update(data));
        stream.on('end', () => resolve(hash.digest('hex')));
        stream.on('error', (err) => {
            if (err.code === 'ENOENT') {
                reject(new Error(`File not found. Please enter the correct file name or file path and try again: ${filePath}`));
            } else {
                reject(err);
            }
        });
    });
}

getHash(filePath, algorithm)
    .then((hash) => {
        console.log(`${algorithm} hash: ${hash}`);
    })
    .catch((err) => {
        console.error(`Error: ${err.message}`);
    });
