#!/usr/bin/env bash
# Sync root-level files from siyarix/siyarix main repo into content/legal/
# This script is called by the CI/CD workflow when triggered by repository_dispatch

set -euo pipefail

REPO_URL="https://raw.githubusercontent.com/siyarix/siyarix/stable"
CONTENT_DIR="src/content/legal"

echo "Syncing root files from siyarix/siyarix..."

declare -A FILES=(
  ["LICENSE"]="license.md"
  ["CONTRIBUTING.md"]="contributing.md"
  ["CODE_OF_CONDUCT.md"]="code-of-conduct.md"
  ["SECURITY.md"]="security.md"
  ["ETHICAL_USE.md"]="ethical-use.md"
  ["TRADEMARK_POLICY.md"]="trademark.md"
  ["RESPONSIBLE_AI_USE.md"]="responsible-ai.md"
  ["GOVERNANCE.md"]="governance.md"
  ["SUPPORT.md"]="support.md"
  ["AI_PROVIDER_POLICY.md"]="ai-provider-policy.md"
  ["THIRD_PARTY_LICENSES.md"]="third-party-licenses.md"
)

for source in "${!FILES[@]}"; do
  dest="${FILES[$source]}"
  echo "  -> $source -> $CONTENT_DIR/$dest"
  curl -sSf "$REPO_URL/$source" -o "$CONTENT_DIR/$dest" || echo "  [!] Failed to fetch $source"
done

echo "Sync complete."
