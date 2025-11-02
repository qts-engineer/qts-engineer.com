#!/usr/bin/env node

// DEFINITIVE FIX: Never run react-snap unless explicitly enabled locally
// This prevents all Puppeteer Chrome launch errors on Vercel/CI

// Check all possible Vercel/CI indicators
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_URL || process.env.VERCEL_ENV;
const isCI = process.env.CI === 'true' || process.env.CONTINUOUS_INTEGRATION === 'true' || process.env.GITHUB_ACTIONS;
const shouldSkip = process.env.SKIP_PRERENDER === 'true' || process.env.SKIP_PRERENDER === '1';

// ALWAYS skip if any of these are true
if (isVercel || isCI || shouldSkip || process.env.ENABLE_PRERENDER !== 'true') {
  console.log('✓ Skipping react-snap');
  process.exit(0);
}

// This should NEVER run on Vercel - only local dev with explicit enable
console.log('Running react-snap (local only)...');
const { execSync } = require('child_process');
try {
  execSync('npx react-snap', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠ react-snap failed');
  process.exit(0);
}

