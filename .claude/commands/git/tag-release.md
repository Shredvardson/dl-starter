# Tag Release

Create semantic version from conventional commits:

1. Analyze commit history since last tag
2. Determine version bump (patch/minor/major)
3. Update `package.json` version
4. Create git tag: `git tag v1.2.3`
5. Generate changelog from commit messages

Follow semver: breaking = major, feat = minor, fix = patch.
