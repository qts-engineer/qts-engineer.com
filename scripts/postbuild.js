#!/usr/bin/env node

if (!process.env.SKIP_PRERENDER) {
  const { execSync } = require('child_process');
  try {
    execSync('react-snap', { stdio: 'inherit' });
  } catch (error) {
    console.log('react-snap skipped or failed');
    process.exit(0);
  }
} else {
  console.log('Skipping react-snap (SKIP_PRERENDER is set)');
}

