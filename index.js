#!/usr/bin/env node

const [, , ...args] = process.argv;

console.log(`test-bin args: ${ args.join(', ') || 'none' }`);
