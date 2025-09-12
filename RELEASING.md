# RELEASING.md

## Release Flow

1) Ensure `main` is green (doctor, build, lint, tests).

2) Bump version + changelog:
   - Manual: Update version in package.json and create changelog entry

3) Tag & verify:
   - git tag vX.Y.Z && git push --tags

4) Announce: update README badge and release notes.

## Troubleshooting

- Doctor fails: open artifacts/doctor-report.md and fix.
