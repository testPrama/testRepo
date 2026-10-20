# Dependency check test fixture

This repository is an isolated test for Parameter's pull request dependency check. It is not deployed.

The HTTP endpoint renders a template supplied in the query string. A test PR changes the pinned `lodash` version so the dependency check can assess a known advisory against this reachable code path.

## PR UX fixture

This README-only change exercises the no-dependency-change result.
