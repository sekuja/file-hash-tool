# File Hash Tool
This tool generates the hash of a file using different algorithms (`MD5`, `SHA-1`, `SHA-256`, `SHA-512`).

## Installation
1. Clone this repository.
   ```
   git clone https://github.com/sekuja/file-hash-tool.git
   cd file-hash-tool
   ```
2. Run `npm install` to install the dependencies.

## Usage
```
npm run hash <filePath> <algorithm>
```

## For example
```
npm run hash example.txt md5
npm run hash example.txt sha256
```

## Supported Algorithms
- `MD5`
- `SHA-1`
- `SHA-256`
- `SHA-512`

## Supported Files
This tool can be used to generate hashes of any file.
