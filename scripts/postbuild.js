#!/usr/bin/env node

console.log('postbuild script running...');
console.log('SKIP_PRERENDER:', process.env.SKIP_PRERENDER);

// Skip react-snap if SKIP_PRERENDER is set OR if we're on Vercel (detected by CI env)
if (
  process.env.SKIP_PRERENDER === 'true' || 
  process.env.SKIP_PRERENDER === '1' ||
  process.env.VERCEL === '1' ||
  process.env.CI === 'true'
) {
  console.log('✓ Skipping react-snap');
  process.exit(0);
}

console.log('Running react-snap...');
const { execSync } = require('child_process');
try {
  execSync('react-snap', { stdio: 'inherit', env: process.env });
  console.log('✓ react-snap completed successfully');
} catch (error) {
  // Always exit with 0 to prevent build failure
  console.log('⚠ react-snap failed, but continuing build (this is OK)...');
  process.exit(0);
}

