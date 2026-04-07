## Core Plugins

Voiden ships with a suite of built-in extensions that cover the full API development workflow. Each extension is independently loaded, versioned, and can be enabled or disabled from the Extensions panel.

---

### REST API (`voiden-rest-api`)

The foundation of Voiden. Provides the full HTTP request editing experience — method selector, URL input, headers, query params, path params, cookies, and every major body type: JSON, XML, YAML, HTML, multipart/form-data, and URL-encoded. Responses are displayed with status, headers, and a syntax-highlighted body viewer. Supports **cURL paste** (paste any `curl` command and it auto-populates the editor) and integrates deeply with the request pipeline for environment variable substitution and content-type inference.

---

### GraphQL (`voiden-graphql`)

A dedicated GraphQL client with a schema importer and visual query builder. Load `.graphql` or `.gql` schema files and browse operations and fields through a UI, or write queries manually. Supports queries, mutations, and subscriptions with a separate variables block. Builds its own POST requests with auto-generated headers — no REST block required.

---

### Simple Assertions (`simple-assertions`)

Inline test assertions for HTTP responses. Use the `/assertions` slash command to insert an assertion table, then define expectations using JSONPath, XPath, or field selectors with operators like `equals`, `contains`, `exists`, and `matches`. Results appear as a pass/fail sub-panel in the response view.

---

### Advanced Authentication (`voiden-advanced-auth`)

Comprehensive auth block supporting every major authentication scheme: **Bearer Token**, **Basic Auth**, **API Key** (header or query param), **OAuth 2.0**, **OAuth 1.0**, **Digest**, **AWS Signature v4**, NTLM, Hawk, and more. Auth values support environment variable substitution and can be inherited from parent collections.

---

### Sockets & gRPC (`voiden-sockets-grpcs`)

Real-time communication support for **WebSocket (WSS)** and **gRPC** connections. Import `.proto` files to discover services and methods, then run unary, server streaming, client streaming, or bidirectional streaming calls. Includes a dedicated response panel for live message exchange and history. Supports **websocat** and **grpcurl** paste import.

---

### Scripting (`voiden-scripting`)

JavaScript pre-request and post-response scripting with the `vd` API. Read and modify request headers, body, and URL before sending. Access response data after receiving. Use `voiden.env.get()` for environment variables, `voiden.variables.get/set()` for runtime state, `voiden.log()` for output, `voiden.assert()` for script-based assertions, and `voiden.cancel()` to abort a request from a pre-script. Logs are visible in the **Script Logs** sidebar tab.

---

### Faker (`voiden-faker`)

Dynamic fake data generation powered by [Faker.js](https://fakerjs.dev). Use `{{$faker.person.firstName()}}` or `{{$faker.number.int({"min":1,"max":10})}}` syntax anywhere in headers, query params, path params, or request bodies. Values are resolved fresh on every request send.

---

### Stitch (`voiden-stitch`)

Batch runner for multiple `.void` files. Define file patterns (with glob matching and exclusions), configure variable isolation, delay between requests, and stop-on-failure behavior. Results appear in a dedicated **Stitch Results** sidebar tab with per-file pass/fail status, assertion counts, and timing.

---

### Markdown Preview (`md-preview`)

Live preview for `.md` and `.markdown` files. Toggle between edit and preview mode from the code editor toolbar. Renders full **GitHub Flavored Markdown** — tables, task lists, strikethrough, syntax-highlighted code blocks, blockquotes, YAML frontmatter, and more.

---

### OpenAPI Importer (`openapi-import`)

Import **OpenAPI v3.0** JSON collections directly into Voiden. The importer recreates the full folder hierarchy as directories with `.void` request files — preserving names, HTTP methods, headers, query params, and body types (JSON, multipart, URL-encoded). Accessible via the import button in the left sidebar.

---

### Postman Importer (`postman-import`)

Migrate from Postman by importing **Collection v2.1** JSON exports. Converts each request to a native `.void` file and recreates the nested folder structure. Handles all body types including raw, form-data, and URL-encoded, and sanitizes file/folder names for filesystem compatibility.
