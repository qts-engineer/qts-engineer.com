#!/usr/bin/env node

console.log('postbuild script running...');
console.log('Environment check:');
console.log('  SKIP_PRERENDER:', process.env.SKIP_PRERENDER);
console.log('  VERCEL:', process.env.VERCEL);
console.log('  CI:', process.env.CI);
console.log('  VERCEL_URL:', process.env.VERCEL_URL);

// Default to skipping react-snap - only run if explicitly allowed
const shouldRun = 
  process.env.SKIP_PRERENDER !== 'true' &&
  process.env.SKIP_PRERENDER !== '1' &&
  process.env.VERCEL !== '1' &&
  process.env.CI !== 'true' &&
  !process.env.VERCEL_URL &&
  process.env.ENABLE_PRERENDER === 'true'; // Must explicitly enable

if (!shouldRun) {
  console.log('✓ Skipping react-snap (safe default for CI/Vercel environments)');
  process.exit(0);
}

console.log('Running react-snap (explicitly enabled)...');
const { execSync } = require('child_process');
try {
  // Use npx to ensure correct execution
  execSync('npx react-snap', { stdio: 'inherit', env: process.env });
  console.log('✓ react-snap completed successfully');
} catch (error) {
  // Always exit with 0 to prevent build failure
  console.log('⚠ react-snap failed, but continuing build (this is OK)...');
  process.exit(0);
}

