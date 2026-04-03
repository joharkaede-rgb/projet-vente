git rev-parse --abbrev-ref HEAD >/dev/null 2>&1 || true
git branch -M main || true
echo "Pushing branch main vers origin..."
git push -u origin main
