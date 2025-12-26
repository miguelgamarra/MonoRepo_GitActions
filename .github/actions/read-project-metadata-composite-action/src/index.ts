import { getInput, setFailed, setOutput } from '@actions/core';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

try {
  const packageJsonFilePath: string = getInput('package-json-filepath');

  if (!packageJsonFilePath) {
    throw new Error('Target file path not provided.');
  }

  const packagePath = resolve(packageJsonFilePath);

  const raw = await readFile(packagePath, 'utf8');
  const data = JSON.parse(raw);

  const name = data?.name ?? '';
  const version = data?.version ?? '';
  const author = data?.author ?? '';

  setOutput('name', name);
  setOutput('version', version);
  setOutput('author', author);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  setFailed(`Error reading or parsing package.json: ${message}`);
}
