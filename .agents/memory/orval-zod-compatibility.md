---
name: OpenAPI Zod generation
description: Compatibility note for generated Zod schemas in the pnpm workspace
---

When the workspace runtime uses Zod 3 but the OpenAPI generator supports Zod 4 syntax, set the generator's Zod override to the numeric runtime major so generated schemas use compatible APIs.

**Why:** Automatic detection in the generator can emit newer top-level helpers such as email and int that are absent from the installed runtime, causing library typechecks to fail after codegen.