// ── Course Catalog ───────────────────────────────────────────────
export const CATALOG = [
  {
    id: 'api-express',
    title: 'APIs for Beginners',
    subtitle: 'with Express.js',
    description: 'Master REST API design, authentication, middleware, pagination and real deployment from scratch.',
    icon: '⚡',
    color: '#e94560',
    gradient: 'from-accent/20 to-brand_blue/10',
    level: 'Beginner',
    lessons: 20,
    duration: '4h 30m',
    tags: ['REST', 'Express.js', 'Node.js', 'JWT'],
    available: true,
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    subtitle: 'Node.js to Production',
    description: 'Build scalable server-side applications with databases, caching, queues, and cloud deployment.',
    icon: '💻',
    color: '#4fc3f7',
    gradient: 'from-brand_blue/20 to-brand_purple/10',
    level: 'Intermediate',
    lessons: 28,
    duration: '6h',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    available: false,
  },
  {
    id: 'fintech-blockchain',
    title: 'Fintech & Blockchain',
    subtitle: 'Web3 from First Principles',
    description: 'Understand blockchain fundamentals, build DeFi integrations, and work with payment APIs like Paystack.',
    icon: '💰',
    color: '#ffd060',
    gradient: 'from-brand_yellow/20 to-brand_green/10',
    level: 'Intermediate',
    lessons: 24,
    duration: '5h',
    tags: ['Solidity', 'Web3.js', 'Paystack', 'DeFi'],
    available: false,
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'CI/CD & Infrastructure',
    description: 'From local development to cloud — Docker, GitHub Actions, Nginx, monitoring, and everything in between.',
    icon: '⚙️',
    color: '#00d4aa',
    gradient: 'from-brand_green/20 to-brand_blue/10',
    level: 'Intermediate',
    lessons: 22,
    duration: '5h 30m',
    tags: ['Docker', 'GitHub Actions', 'AWS', 'Nginx'],
    available: false,
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Applied AI for Developers',
    description: 'Build AI-powered applications using Python, integrate LLMs into your products, and understand ML fundamentals.',
    icon: '🤖',
    color: '#b464ff',
    gradient: 'from-brand_purple/20 to-accent/10',
    level: 'Advanced',
    lessons: 30,
    duration: '7h',
    tags: ['Python', 'OpenAI API', 'LangChain', 'HuggingFace'],
    available: false,
  },
]

// ── API Course Lessons ───────────────────────────────────────────
export const API_COURSE_LESSONS = [
  // ─ SECTION 1: FUNDAMENTALS ──────────────────────────────────
  {
    id: 0,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'What is an API?',
    description: 'API stands for Application Programming Interface — the backbone of modern software. Almost every app you use daily relies on APIs to communicate with servers and third-party services.',
    runnable: false,
    content: [
      {
        type: 'cards',
        title: 'The Restaurant Analogy',
        items: [
          { icon: '🍽️', title: 'You (Client)',      text: "Sit at the table and order from the menu — you don't care how the kitchen works." },
          { icon: '📋', title: 'API (Waiter)',       text: 'Takes your order to the kitchen and delivers the response back to your table.' },
          { icon: '🔥', title: 'Server (Kitchen)',   text: 'Processes the request, runs business logic, and prepares the response.' },
        ],
      },
      {
        type: 'cards',
        title: 'Why APIs Matter — For Everyone',
        items: [
          { icon: '📱', title: 'Mobile Apps',   text: 'Your weather app fetches live data through a weather API every time you open it.' },
          { icon: '💳', title: 'Payments',      text: 'Stripe, Paystack, Flutterwave — all expose APIs to process money securely.' },
          { icon: '🤖', title: 'AI Products',   text: 'ChatGPT, Claude, Gemini — every AI you use is accessed through an API.' },
          { icon: '🔗', title: 'Integration',   text: 'Banks, logistics, hospitals — systems talk to each other through APIs 24/7.' },
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: '<strong>Key insight:</strong> APIs let you build on top of existing services instead of rebuilding everything. You use the Twitter API to post tweets — you don\'t rebuild Twitter.',
      },
      {
        type: 'code',
        lang: 'http',
        label: 'A real API request & response',
        code: `// CLIENT asks: "Give me user #42"
GET https://api.myapp.com/users/42
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
Content-Type: application/json

// SERVER responds:
200 OK
{
  "id": 42,
  "name": "Rasheed Sanni",
  "email": "rasheed@example.com",
  "role": "admin"
}`,
      },
    ],
  },

  {
    id: 1,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'Types of APIs',
    description: 'Not all APIs are the same. They differ by access level, architecture, and protocol. Understanding the landscape helps you pick the right tool for every job.',
    runnable: false,
    content: [
      {
        type: 'cards',
        title: 'By Access Level',
        items: [
          { icon: '🔓', title: 'Public APIs',  text: 'Open to everyone. OpenWeather, CoinGecko, GitHub API — often free with rate limits.' },
          { icon: '🔒', title: 'Private APIs', text: 'Internal use only. Your microservices talking to each other inside a company.' },
          { icon: '🤝', title: 'Partner APIs', text: 'Shared between specific businesses — e.g. a bank and a fintech startup via agreement.' },
        ],
      },
      {
        type: 'status-list',
        title: 'By Architecture Style',
        items: [
          { code: 'REST',      codeColor: 'green',  name: 'Most popular',     desc: 'HTTP-based, stateless, JSON. Powers 70%+ of web APIs. This is what we build.' },
          { code: 'GraphQL',   codeColor: 'purple', name: 'Query language',    desc: 'Client specifies exactly what data it needs. Created by Meta. Great for complex frontends.' },
          { code: 'gRPC',      codeColor: 'yellow', name: 'High performance',  desc: 'Binary protocol over HTTP/2. Used internally at Google, Netflix, large microservices.' },
          { code: 'SOAP',      codeColor: 'blue',   name: 'Legacy/enterprise', desc: 'XML-based, verbose but reliable. Still common in banking and healthcare.' },
          { code: 'WebSocket', codeColor: 'red',    name: 'Real-time',         desc: 'Persistent bidirectional connection. Chat apps, live scores, crypto price feeds.' },
        ],
      },
      { type: 'callout', variant: 'info', text: '<strong>For this course:</strong> We focus on REST APIs with Express.js — the industry standard every developer should know first.' },
    ],
  },

  {
    id: 2,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'REST APIs',
    description: "REST (Representational State Transfer) is an architectural style — a set of constraints for how web services should behave. It's not a protocol, it's a convention.",
    runnable: true,
    runnerTitle: 'Try it — Basic Express Server',
    starterCode: `// This simulates a basic Express-style response
// In a real app, this runs on Node.js

const users = [
  { id: 1, name: "Rasheed Sanni", role: "admin" },
  { id: 2, name: "Amara Osei",    role: "user"  },
];

// Simulate GET /users
function getUsers() {
  return {
    status: 200,
    body: { success: true, data: users }
  };
}

// Simulate GET /users/1
function getUserById(id) {
  const user = users.find(u => u.id === id);
  if (!user) return { status: 404, body: { error: "User not found" } };
  return { status: 200, body: { success: true, data: user } };
}

const allUsers = getUsers();
console.log("GET /users →", JSON.stringify(allUsers, null, 2));

const oneUser = getUserById(1);
console.log("\\nGET /users/1 →", JSON.stringify(oneUser, null, 2));

const missing = getUserById(99);
console.log("\\nGET /users/99 →", JSON.stringify(missing, null, 2));`,
    content: [
      {
        type: 'status-list',
        title: 'The 6 REST Constraints',
        items: [
          { code: '1', codeColor: 'green', name: 'Stateless',        desc: 'Every request contains ALL info needed. The server stores no session between requests.' },
          { code: '2', codeColor: 'green', name: 'Client-Server',    desc: 'Frontend and backend are completely separate — they can evolve independently.' },
          { code: '3', codeColor: 'green', name: 'Uniform Interface',desc: 'Resources identified by URLs. Standard HTTP methods. Consistent response format.' },
          { code: '4', codeColor: 'green', name: 'Cacheable',        desc: 'Responses can be cached by clients/proxies to reduce server load and latency.' },
          { code: '5', codeColor: 'green', name: 'Layered System',   desc: "Client doesn't know if it's talking to the real server, a cache, or a load balancer." },
          { code: '6', codeColor: 'green', name: 'Code on Demand',   desc: 'Optional: server can send executable code (JavaScript) to clients.' },
        ],
      },
      { type: 'callout', variant: 'warn',  text: '<strong>❌ Bad (RPC-style):</strong> &nbsp;<code>/getUser</code> &nbsp; <code>/createPost</code> &nbsp; <code>/deleteComment</code>' },
      { type: 'callout', variant: 'tip',   text: '<strong>✅ Good (REST-style):</strong> &nbsp;<code>/users</code> &nbsp; <code>/posts</code> &nbsp; <code>/comments</code> — the HTTP method says what to do.' },
      {
        type: 'code', lang: 'javascript', label: 'Express.js REST skeleton',
        code: `const express = require('express');
const app = express();

app.use(express.json()); // Parse incoming JSON bodies

// One resource — all CRUD on the same URL pattern
app.get('/users',     getAllUsers);   // Read all
app.post('/users',    createUser);   // Create
app.get('/users/:id', getUser);      // Read one
app.put('/users/:id', replaceUser);  // Replace
app.patch('/users/:id', updateUser); // Partial update
app.delete('/users/:id', deleteUser);// Delete

app.listen(3000, () => console.log('API live on port 3000'));`,
      },
    ],
  },

  {
    id: 3,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'Endpoints & URL Design',
    description: "An endpoint is a specific URL + HTTP method combination your API exposes. Great URL design makes your API feel intuitive — developers can guess the right endpoint without reading docs.",
    runnable: true,
    runnerTitle: 'Design your own endpoint map',
    starterCode: `// Endpoint design exercise
// Edit the routes object and see the full API surface

const routes = {
  "GET    /api/v1/posts":              "Get all posts (with filtering)",
  "POST   /api/v1/posts":              "Create a new post",
  "GET    /api/v1/posts/:id":          "Get a single post",
  "PATCH  /api/v1/posts/:id":          "Update specific fields",
  "DELETE /api/v1/posts/:id":          "Delete a post",
  "GET    /api/v1/posts/:id/comments": "Get comments on a post",
  "POST   /api/v1/posts/:id/comments": "Add a comment",
};

// Add your own routes!
routes["GET    /api/v1/users"]       = "Get all users";
routes["GET    /api/v1/users/:id"]   = "Get user profile";

console.log("=== Your API Surface ===\\n");
Object.entries(routes).forEach(([endpoint, desc]) => {
  const [method, path] = endpoint.split(/\\s+(.+)/);
  console.log(\`\${method.padEnd(8)} \${path.padEnd(40)} → \${desc}\`);
});

console.log(\`\\nTotal endpoints: \${Object.keys(routes).length}\`);`,
    content: [
      {
        type: 'code', lang: 'text', label: 'Anatomy of an endpoint URL',
        code: `https://api.myapp.com  /v1   /users  /42    /posts
      ↑                  ↑      ↑       ↑       ↑
   Base URL           Version Resource  ID   Sub-resource`,
      },
      {
        type: 'ep-list',
        title: 'Full Endpoint Map — Blog API',
        items: [
          { method: 'GET',    path: '/api/v1/posts',              desc: 'Get all blog posts' },
          { method: 'POST',   path: '/api/v1/posts',              desc: 'Create a new post' },
          { method: 'GET',    path: '/api/v1/posts/:id',          desc: 'Get a single post by ID' },
          { method: 'PUT',    path: '/api/v1/posts/:id',          desc: 'Replace an entire post' },
          { method: 'PATCH',  path: '/api/v1/posts/:id',          desc: 'Update specific fields only' },
          { method: 'DELETE', path: '/api/v1/posts/:id',          desc: 'Delete a post' },
          { method: 'GET',    path: '/api/v1/posts/:id/comments', desc: 'Get all comments on a post' },
          { method: 'POST',   path: '/api/v1/posts/:id/comments', desc: 'Add a comment to a post' },
        ],
      },
    ],
  },

  {
    id: 4,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'Nested Data & JSON Structure',
    description: 'APIs speak JSON. How you structure nested objects — objects inside objects, arrays of objects — determines how easy or painful your API is to consume.',
    runnable: true,
    runnerTitle: 'Practice — Build a response envelope',
    starterCode: `// Build a proper nested API response
// Try modifying the data and see the output

function buildResponse(data, page, limit, total) {
  return {
    success: true,
    data: data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
    meta: {
      timestamp: new Date().toISOString(),
      version: "v1",
    },
  };
}

const posts = [
  {
    id: 1,
    title: "APIs for Beginners",
    author: { id: 42, name: "Rasheed Sanni", avatar: "https://cdn.app.com/42.jpg" },
    tags: ["express", "nodejs", "api"],
    stats: { views: 1200, likes: 89 },
    comments: [
      { id: 101, text: "Amazing course!", likes: 12 },
      { id: 102, text: "Very clear explanation", likes: 7 },
    ],
  },
];

const response = buildResponse(posts, 1, 10, 45);
console.log(JSON.stringify(response, null, 2));`,
    content: [
      {
        type: 'code', lang: 'json', label: '❌ Flat structure (bad)',
        code: `{
  "postId": 1, "postTitle": "Hello World",
  "authorId": 42, "authorName": "Rasheed",
  "commentId1": 101, "commentText1": "Great post!",
  "commentId2": 102, "commentText2": "Thanks!"
}`,
      },
      {
        type: 'code', lang: 'json', label: '✅ Nested structure (good)',
        code: `{
  "id": 1,
  "title": "Hello World",
  "author": { "id": 42, "name": "Rasheed Sanni" },
  "tags": ["javascript", "express"],
  "comments": [
    { "id": 101, "text": "Great post!", "likes": 5 },
    { "id": 102, "text": "Thanks!", "likes": 2 }
  ],
  "meta": { "published": true, "readTime": 5 }
}`,
      },
    ],
  },

  {
    id: 5,
    section: 'Fundamentals',
    tag: 'Code',
    tagColor: 'green',
    title: 'How to Pass Data to the Backend',
    description: 'There are four distinct ways to send data in an HTTP request. Knowing when to use each one is fundamental to designing correct, secure APIs.',
    runnable: true,
    runnerTitle: 'Simulate request data parsing',
    starterCode: `// Simulate how Express parses incoming request data

function parseRequest(request) {
  const { method, url, headers, body } = request;
  
  // Parse URL for params and query string
  const [pathPart, queryString] = url.split("?");
  const pathSegments = pathPart.split("/").filter(Boolean);
  
  // Extract route params (e.g. /users/42/posts → id = "42")
  const params = {};
  if (pathSegments[1] && !isNaN(pathSegments[1])) {
    params.id = pathSegments[1];
  }
  
  // Parse query string
  const query = {};
  if (queryString) {
    queryString.split("&").forEach(pair => {
      const [k, v] = pair.split("=");
      query[k] = v;
    });
  }
  
  return { params, query, body, headers };
}

// Simulate: POST /api/v1/users/42/posts?notify=true
const incomingRequest = {
  method: "POST",
  url: "/api/v1/users/42/posts?notify=true&format=json",
  headers: {
    "authorization": "Bearer eyJhbGci...",
    "content-type": "application/json",
    "x-api-key": "myapp_abc123",
  },
  body: { title: "My first post", content: "Hello world!", tags: ["api"] },
};

const parsed = parseRequest(incomingRequest);
console.log("Route params:", parsed.params);
console.log("Query string:", parsed.query);
console.log("Request body:", parsed.body);
console.log("Headers:", parsed.headers);`,
    content: [
      {
        type: 'status-list',
        title: 'The 4 Ways to Send Data',
        items: [
          { code: 'Params',   codeColor: 'green',  name: 'Route Parameters', desc: '/users/:id — identifies a specific resource. Always use for IDs.' },
          { code: 'Query',    codeColor: 'blue',   name: 'Query String',     desc: '/posts?page=2&sort=asc — filtering, sorting, searching, pagination.' },
          { code: 'Body',     codeColor: 'yellow', name: 'Request Body',     desc: 'JSON payload in POST/PUT/PATCH. Used for creating or updating resources.' },
          { code: 'Headers',  codeColor: 'purple', name: 'HTTP Headers',     desc: 'Authorization tokens, API keys, Content-Type — metadata, not payload.' },
        ],
      },
      {
        type: 'code', lang: 'javascript', label: 'Accessing all 4 in Express',
        code: `// POST /api/v1/users/:id/posts?notify=true
app.post('/api/v1/users/:id/posts', (req, res) => {
  const userId = req.params.id;          // Route param
  const notify = req.query.notify;       // Query string
  const { title, content } = req.body;  // Request body
  const token = req.headers['authorization']; // Header

  res.status(201).json({ userId, notify, title, content });
});`,
      },
      { type: 'callout', variant: 'warn', text: '<strong>Security:</strong> Never put sensitive data in query strings — they appear in server logs, browser history, and referrer headers.' },
    ],
  },

  {
    id: 6,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'HTTP Status Codes',
    description: "Status codes are 3-digit numbers your API returns to tell the client exactly what happened. They're the universal language between client and server — use them precisely.",
    runnable: true,
    runnerTitle: 'Build a status code handler',
    starterCode: `// Build a smart response helper using proper status codes

function apiResponse(res, data, options = {}) {
  const { status = 200, message = "Success", error = null } = options;
  
  if (error) {
    return { status, body: { success: false, error, message } };
  }
  return { status, body: { success: true, data, message } };
}

// Simulate different scenarios
const scenarios = [
  { desc: "User found",             result: apiResponse({}, { id: 1, name: "Rasheed" }) },
  { desc: "Resource created",       result: apiResponse({}, { id: 99 }, { status: 201, message: "Created" }) },
  { desc: "Not found",              result: apiResponse({}, null, { status: 404, error: "User not found" }) },
  { desc: "Not authenticated",      result: apiResponse({}, null, { status: 401, error: "No token provided" }) },
  { desc: "Forbidden",              result: apiResponse({}, null, { status: 403, error: "Admins only" }) },
  { desc: "Validation failed",      result: apiResponse({}, null, { status: 422, error: "Email is required" }) },
  { desc: "Rate limited",           result: apiResponse({}, null, { status: 429, error: "Slow down!" }) },
];

scenarios.forEach(({ desc, result }) => {
  const icon = result.status < 300 ? "✅" : result.status < 500 ? "⚠️" : "❌";
  console.log(\`\${icon} \${desc}: HTTP \${result.status}\`);
  console.log("   →", JSON.stringify(result.body));
  console.log();
});`,
    content: [
      {
        type: 'status-list', title: '2xx — Success',
        items: [
          { code: '200', codeColor: 'green', name: 'OK',         desc: 'Generic success. Use for GET, PUT, PATCH responses.' },
          { code: '201', codeColor: 'green', name: 'Created',    desc: 'Resource created successfully. Always use after a successful POST.' },
          { code: '204', codeColor: 'green', name: 'No Content', desc: 'Success but nothing to return. Perfect for DELETE — no body needed.' },
        ],
      },
      {
        type: 'status-list', title: '4xx — Client Errors',
        items: [
          { code: '400', codeColor: 'yellow', name: 'Bad Request',      desc: 'Malformed JSON, missing required fields, invalid data.' },
          { code: '401', codeColor: 'yellow', name: 'Unauthorized',     desc: 'Not authenticated — missing, expired, or invalid token.' },
          { code: '403', codeColor: 'yellow', name: 'Forbidden',        desc: "Authenticated but lacking permission. You're in but this isn't yours." },
          { code: '404', codeColor: 'yellow', name: 'Not Found',        desc: "Resource doesn't exist at this URL." },
          { code: '422', codeColor: 'yellow', name: 'Unprocessable',    desc: 'Validation failed — format valid but values break business rules.' },
          { code: '429', codeColor: 'yellow', name: 'Too Many Requests',desc: 'Rate limit exceeded — slow down.' },
        ],
      },
      {
        type: 'status-list', title: '5xx — Server Errors',
        items: [
          { code: '500', codeColor: 'red', name: 'Internal Error',      desc: 'Something crashed on the server. Always a bug you need to fix.' },
          { code: '503', codeColor: 'red', name: 'Service Unavailable', desc: 'Server is down, overloaded, or in maintenance mode.' },
        ],
      },
    ],
  },

  {
    id: 7,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'HTTP Methods',
    description: 'HTTP methods tell the server what action to perform on a resource. Each has a specific meaning — this predictability is what makes REST so powerful.',
    runnable: true,
    runnerTitle: 'Simulate CRUD operations',
    starterCode: `// Simulate a full in-memory CRUD API

let posts = [
  { id: 1, title: "Intro to APIs", author: "Rasheed", likes: 45 },
  { id: 2, title: "Express.js 101", author: "Amara", likes: 32 },
];
let nextId = 3;

const api = {
  // GET — read, safe, idempotent
  "GET /posts": () => ({ status: 200, data: posts }),
  
  // GET one
  "GET /posts/1": () => {
    const post = posts.find(p => p.id === 1);
    return post ? { status: 200, data: post } : { status: 404, error: "Not found" };
  },
  
  // POST — create, NOT idempotent (each call creates a new resource)
  "POST /posts": (body) => {
    const post = { id: nextId++, ...body, likes: 0 };
    posts.push(post);
    return { status: 201, data: post };
  },
  
  // PATCH — partial update, idempotent
  "PATCH /posts/1": (body) => {
    const idx = posts.findIndex(p => p.id === 1);
    posts[idx] = { ...posts[idx], ...body };
    return { status: 200, data: posts[idx] };
  },
  
  // DELETE — idempotent
  "DELETE /posts/1": () => {
    posts = posts.filter(p => p.id !== 1);
    return { status: 204, data: null };
  },
};

// Run all operations
console.log("GET /posts:", JSON.stringify(api["GET /posts"]()));
console.log("\\nPOST /posts:", JSON.stringify(api["POST /posts"]({ title: "New Post", author: "Kofi" })));
console.log("\\nPATCH /posts/1:", JSON.stringify(api["PATCH /posts/1"]({ title: "Updated Title" })));
console.log("\\nDELETE /posts/1:", JSON.stringify(api["DELETE /posts/1"]()));
console.log("\\nGET /posts after delete:", JSON.stringify(api["GET /posts"]()));`,
    content: [
      {
        type: 'table',
        title: 'Method Reference',
        headers: ['Method', 'CRUD', 'Safe?', 'Idempotent?', 'Response'],
        rows: [
          ['GET',    'Read',         '✅ Yes', '✅ Yes',      '200 + data'],
          ['POST',   'Create',       '❌ No',  '❌ No',       '201 + created'],
          ['PUT',    'Replace all',  '❌ No',  '✅ Yes',      '200 + updated'],
          ['PATCH',  'Update some',  '❌ No',  '⚠️ Sometimes','200 + updated'],
          ['DELETE', 'Remove',       '❌ No',  '✅ Yes',      '204 no body'],
        ],
      },
      { type: 'callout', variant: 'info', text: '<strong>Idempotent</strong> means calling it 10 times gives the same result as 1 time. DELETE /posts/1 deletes once — subsequent calls return 404, but the <em>state</em> (post is gone) is the same.' },
    ],
  },

  {
    id: 8,
    section: 'Fundamentals',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'Client-Server Flow',
    description: "Understanding the full journey of a request — from browser click to database query and back — helps you debug problems and design better systems.",
    runnable: false,
    content: [
      {
        type: 'flow',
        title: 'Full Request Lifecycle',
        steps: [
          { label: 'Client sends HTTP request (browser, mobile, Postman)', color: 'blue' },
          { label: 'DNS resolves domain → finds the server IP address' },
          { label: 'TCP handshake + TLS (HTTPS encryption)' },
          { label: 'Express receives request → middleware chain runs', color: 'hl' },
          { label: 'Route handler → database query + business logic' },
          { label: 'Response sent back: status code + JSON payload', color: 'green' },
          { label: 'Client renders UI or handles the error', color: 'blue' },
        ],
      },
      {
        type: 'code', lang: 'javascript', label: 'Making API calls from the frontend',
        code: `async function createPost(postData) {
  try {
    const response = await fetch('https://api.myapp.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${localStorage.getItem('token')}\`
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || \`HTTP \${response.status}\`);
    }

    return await response.json();
  } catch (err) {
    console.error('API Error:', err.message);
    throw err;
  }
}`,
      },
    ],
  },

  // ─ SECTION 2: EXPRESS ────────────────────────────────────────
  {
    id: 9,
    section: 'Express.js',
    tag: 'Code',
    tagColor: 'green',
    title: 'Middleware in Express',
    description: "Middleware is code that runs between receiving a request and sending a response. It's the most powerful pattern in Express — used for logging, auth, validation, and error handling.",
    runnable: true,
    runnerTitle: 'Build a middleware pipeline',
    starterCode: `// Simulate Express middleware execution order
// Each middleware calls next() to pass control forward

function createMiddlewarePipeline(...middlewares) {
  return function runPipeline(req) {
    let index = 0;
    const results = [];
    
    function next(err) {
      if (err) {
        results.push(\`❌ ERROR caught: \${err.message}\`);
        return;
      }
      if (index < middlewares.length) {
        const mw = middlewares[index++];
        mw(req, {}, next, results);
      }
    }
    
    next();
    return results;
  };
}

// Define middlewares
const logger = (req, res, next, log) => {
  log.push(\`📝 [LOG] \${req.method} \${req.url} — \${new Date().toISOString()}\`);
  next();
};

const corsCheck = (req, res, next, log) => {
  log.push(\`🌐 [CORS] Origin allowed: \${req.headers.origin || "same-origin"}\`);
  next();
};

const authCheck = (req, res, next, log) => {
  if (!req.headers.authorization) {
    log.push("🔒 [AUTH] No token — stopping pipeline");
    next(new Error("Unauthorized"));
    return;
  }
  log.push(\`🔑 [AUTH] Token valid — user: \${req.user}\`);
  next();
};

const routeHandler = (req, res, next, log) => {
  log.push("🎯 [HANDLER] Running business logic");
  log.push("✅ [RESPONSE] 200 OK — { success: true, data: [...] }");
};

// Test authenticated request
const pipeline = createMiddlewarePipeline(logger, corsCheck, authCheck, routeHandler);

console.log("=== Authenticated Request ===");
const authReq = { method: "GET", url: "/api/posts", headers: { authorization: "Bearer token123", origin: "https://myapp.com" }, user: "rasheed@example.com" };
pipeline(authReq).forEach(msg => console.log(msg));

console.log("\\n=== Unauthenticated Request ===");
const anonReq = { method: "POST", url: "/api/posts", headers: { origin: "https://myapp.com" } };
pipeline(anonReq).forEach(msg => console.log(msg));`,
    content: [
      {
        type: 'flow',
        title: 'Middleware Pipeline',
        steps: [
          { label: 'Incoming Request', color: 'blue' },
          { label: 'Logger — logs method, URL, timestamp' },
          { label: 'CORS — sets access-control headers' },
          { label: 'Auth — validates JWT token', color: 'hl' },
          { label: 'Validation — checks request body' },
          { label: 'Route Handler — business logic + DB', color: 'green' },
        ],
      },
      {
        type: 'code', lang: 'javascript', label: 'All middleware patterns',
        code: `// 1. Global middleware — runs on every request
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json({ limit: '10kb' }));

// 2. Custom logger
const logger = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // CRITICAL: must call next() or request hangs
};

// 3. Auth middleware
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Apply to specific routes
app.get('/profile', requireAuth, getProfile);

// 4. Error handler — MUST have 4 params, always last
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});`,
      },
    ],
  },

  {
    id: 10,
    section: 'Express.js',
    tag: 'Concept',
    tagColor: 'blue',
    title: 'API Documentation',
    description: "Good documentation is what separates a usable API from an unusable one. The OpenAPI Specification (Swagger) is the industry standard — interactive, auto-generated, and universally understood.",
    runnable: false,
    content: [
      {
        type: 'cards',
        title: 'What Good API Docs Include',
        items: [
          { icon: '🗺️', title: 'Endpoints',       text: 'Every URL, method, description, and example request/response pair.' },
          { icon: '🔑', title: 'Authentication',  text: 'How to get a token, where to pass it, what scopes and permissions exist.' },
          { icon: '⚠️', title: 'Error Codes',     text: 'All possible errors with causes and how to resolve them.' },
          { icon: '⏱️', title: 'Rate Limits',     text: 'Requests per minute, what happens when exceeded, how to handle 429s.' },
        ],
      },
      {
        type: 'code', lang: 'bash', label: 'Install Swagger',
        code: 'npm install swagger-ui-express swagger-jsdoc',
      },
      {
        type: 'code', lang: 'javascript', label: 'Swagger setup + JSDoc annotation',
        code: `const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi   = require('swagger-ui-express');

const specs = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Blog API', version: '1.0.0' },
    servers: [{ url: 'https://api.myblog.com/v1' }],
  },
  apis: ['./src/routes/*.js'],
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all blog posts
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *     responses:
 *       200:
 *         description: Paginated list of posts
 */
app.get('/posts', getAllPosts);`,
      },
      { type: 'callout', variant: 'tip', text: '<strong>Tools to know:</strong> Postman (test + document), Bruno (open-source alt), Insomnia (testing), Swagger UI (interactive browser docs), Redoc (beautiful static docs).' },
    ],
  },

  {
    id: 11,
    section: 'Express.js',
    tag: 'Code',
    tagColor: 'green',
    title: 'ORM Basics',
    description: "An ORM (Object-Relational Mapper) lets you interact with databases using JavaScript instead of raw SQL. Prisma is the modern standard for Node.js — type-safe, intuitive, and powerful.",
    runnable: true,
    runnerTitle: 'Simulate Prisma ORM queries',
    starterCode: `// Simulate Prisma ORM operations in-memory

class PrismaSimulator {
  constructor(data) { this.store = data; }
  
  get post() {
    return {
      findMany: ({ where, include, orderBy, skip = 0, take = 10 } = {}) => {
        let results = [...this.store.posts];
        if (where?.authorId) results = results.filter(p => p.authorId === where.authorId);
        if (where?.published !== undefined) results = results.filter(p => p.published === where.published);
        if (orderBy?.createdAt === 'desc') results.sort((a, b) => b.id - a.id);
        results = results.slice(skip, skip + take);
        if (include?.author) results = results.map(p => ({ ...p, author: this.store.users.find(u => u.id === p.authorId) }));
        return results;
      },
      count: (args = {}) => {
        let posts = this.store.posts;
        if (args.where?.authorId) posts = posts.filter(p => p.authorId === args.where.authorId);
        return posts.length;
      },
      create: ({ data }) => {
        const post = { id: this.store.posts.length + 1, ...data, createdAt: new Date().toISOString() };
        this.store.posts.push(post);
        return post;
      },
    };
  }
}

const prisma = new PrismaSimulator({
  users: [
    { id: 1, name: "Rasheed Sanni", email: "rasheed@devpath.com" },
    { id: 2, name: "Amara Osei",    email: "amara@devpath.com" },
  ],
  posts: [
    { id: 1, title: "APIs for Beginners", authorId: 1, published: true },
    { id: 2, title: "Express.js Guide",   authorId: 1, published: true },
    { id: 3, title: "Draft post",         authorId: 2, published: false },
  ],
});

// Simulate Prisma queries
const allWithAuthors = prisma.post.findMany({ include: { author: true } });
console.log("All posts with authors:");
allWithAuthors.forEach(p => console.log(\` - "\${p.title}" by \${p.author.name}\`));

const newPost = prisma.post.create({ data: { title: "New ORM Post", authorId: 1, published: true } });
console.log("\\nCreated post:", JSON.stringify(newPost, null, 2));

console.log("\\nTotal posts:", prisma.post.count());
console.log("Rasheed's posts:", prisma.post.count({ where: { authorId: 1 } }));`,
    content: [
      {
        type: 'code', lang: 'javascript', label: '❌ Raw SQL vs ✅ Prisma ORM',
        code: `// ❌ Raw SQL — complex, error-prone, no type safety
const result = await db.query(
  'SELECT u.*, COUNT(p.id) as post_count FROM users u LEFT JOIN posts p ON p.author_id = u.id WHERE u.email = $1',
  [email]
);

// ✅ Prisma ORM — clean, readable, auto-completed
const user = await prisma.user.findFirst({
  where: { email },
  include: { _count: { select: { posts: true } } }
});`,
      },
      {
        type: 'code', lang: 'javascript', label: 'Full CRUD with Prisma',
        code: `const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// READ ALL — with JOIN + count
app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { author: true, _count: { select: { comments: true } } },
    orderBy: { createdAt: 'desc' }
  });
  res.json({ success: true, data: posts });
});

// CREATE
app.post('/posts', requireAuth, async (req, res) => {
  const post = await prisma.post.create({
    data: { ...req.body, authorId: req.user.id }
  });
  res.status(201).json({ success: true, data: post });
});

// DELETE
app.delete('/posts/:id', requireAuth, async (req, res) => {
  await prisma.post.delete({ where: { id: parseInt(req.params.id) } });
  res.status(204).send();
});`,
      },
    ],
  },

  {
    id: 12,
    section: 'Express.js',
    tag: 'Advanced',
    tagColor: 'purple',
    title: 'API Pagination',
    description: "Never return all records at once — it kills performance. Pagination breaks large datasets into manageable chunks. Three main strategies, each with real tradeoffs.",
    runnable: true,
    runnerTitle: 'Implement both pagination strategies',
    starterCode: `// Compare offset vs cursor pagination

const allPosts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: \`Post #\${i + 1}\`,
  createdAt: new Date(2024, 0, i + 1).toISOString(),
}));

// ── Strategy 1: Offset Pagination ─────────────────────────
function offsetPaginate(page = 1, limit = 5) {
  const skip = (page - 1) * limit;
  const data = allPosts.slice(skip, skip + limit);
  const total = allPosts.length;
  return {
    data,
    pagination: {
      page, limit, total,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  };
}

// ── Strategy 2: Cursor Pagination ─────────────────────────
function cursorPaginate(cursor = null, limit = 5) {
  let startIdx = 0;
  if (cursor) {
    startIdx = allPosts.findIndex(p => p.id === cursor) + 1;
  }
  const slice = allPosts.slice(startIdx, startIdx + limit + 1);
  const hasNext = slice.length > limit;
  const data = hasNext ? slice.slice(0, -1) : slice;
  return {
    data,
    nextCursor: hasNext ? data[data.length - 1].id : null,
  };
}

// Test both
console.log("=== Offset — Page 2 ===");
const page2 = offsetPaginate(2, 5);
console.log("Posts:", page2.data.map(p => p.title));
console.log("Pagination:", page2.pagination);

console.log("\\n=== Cursor — First page ===");
const first = cursorPaginate(null, 5);
console.log("Posts:", first.data.map(p => p.title));
console.log("Next cursor:", first.nextCursor);

console.log("\\n=== Cursor — Next page ===");
const second = cursorPaginate(first.nextCursor, 5);
console.log("Posts:", second.data.map(p => p.title));
console.log("Next cursor:", second.nextCursor);`,
    content: [
      {
        type: 'status-list',
        title: 'Types of Pagination',
        items: [
          { code: 'Offset', codeColor: 'green',  name: 'Page-based',   desc: '?page=2&limit=10 — Simple. Can miss/duplicate records if data changes during browsing.' },
          { code: 'Cursor', codeColor: 'blue',   name: 'Pointer-based',desc: '?cursor=eyJpZCI6MTAwfQ — Stable, efficient. Perfect for infinite scroll (Twitter, Instagram).' },
          { code: 'Keyset', codeColor: 'yellow', name: 'Range-based',  desc: '?after_id=100 — Fastest for sorted data. Used by high-performance social feeds.' },
        ],
      },
    ],
  },

  // ─ SECTION 3: AUTH ───────────────────────────────────────────
  {
    id: 13,
    section: 'Auth & Security',
    tag: 'Auth',
    tagColor: 'yellow',
    title: 'Authentication vs Authorization',
    description: "Two words constantly confused, meaning completely different things. Getting this distinction right is critical for building secure APIs.",
    runnable: false,
    content: [
      {
        type: 'cards',
        title: 'The Core Difference',
        items: [
          { icon: '🪪', title: 'Authentication (AuthN)', text: '"Who are you?" — Verifying identity. Login, signup, token validation. Proves you are who you claim.' },
          { icon: '🛡️', title: 'Authorization (AuthZ)',  text: '"What can you do?" — Checking permissions after identity confirmed. Roles, scopes, ownership.' },
        ],
      },
      { type: 'callout', variant: 'info', text: '<strong>Analogy:</strong> Authentication is showing your ID at the door. Authorization is the bouncer checking if you\'re on the VIP list.' },
      {
        type: 'code', lang: 'javascript', label: 'RBAC — Role-Based Access Control',
        code: `// requireAuth = authentication (who are you?)
// requireRole = authorization (what can you do?)

const requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};

// Only admins can delete users
app.delete('/users/:id', requireAuth, requireRole('admin'), deleteUser);

// Admins and mods can ban posts
app.post('/posts/:id/ban', requireAuth, requireRole('admin', 'mod'), banPost);

// Any authenticated user can create posts
app.post('/posts', requireAuth, createPost);`,
      },
    ],
  },

  {
    id: 14,
    section: 'Auth & Security',
    tag: 'Auth',
    tagColor: 'yellow',
    title: 'Types of Authentication',
    description: "Five authentication strategies in common use. Choosing the right one depends on your use case — user app, B2B, machine-to-machine, or third-party login.",
    runnable: false,
    content: [
      {
        type: 'status-list',
        title: 'Authentication Strategies',
        items: [
          { code: 'JWT',       codeColor: 'green',  name: 'Token-based',    desc: 'Self-contained signed tokens. Stateless. Best for SPAs, mobile apps, and microservices.' },
          { code: 'Session',   codeColor: 'blue',   name: 'Cookie-based',   desc: 'Server stores session in DB/Redis. Stateful. Classic web apps. Needs sticky sessions for scaling.' },
          { code: 'API Key',   codeColor: 'yellow', name: 'Key-based',      desc: 'Static tokens for machine-to-machine. Server-to-server calls, public APIs, webhooks.' },
          { code: 'OAuth 2.0', codeColor: 'purple', name: 'Delegated auth', desc: '"Login with Google/GitHub" — user grants your app scoped access to their data.' },
          { code: 'Basic Auth',codeColor: 'red',    name: 'User+pass',      desc: 'Base64-encoded credentials. Only for internal/dev tools. Never in production over HTTP.' },
        ],
      },
      {
        type: 'flow',
        title: 'OAuth 2.0 Flow',
        steps: [
          { label: 'User clicks "Login with Google"', color: 'blue' },
          { label: 'Redirect to Google consent screen' },
          { label: 'User approves → Google redirects back with auth code' },
          { label: 'Your server exchanges code for access + refresh tokens', color: 'hl' },
          { label: 'Fetch user profile from Google using access token' },
          { label: 'Create/find user in your DB → issue your own JWT', color: 'green' },
        ],
      },
    ],
  },

  {
    id: 15,
    section: 'Auth & Security',
    tag: 'Auth',
    tagColor: 'yellow',
    title: 'How Tokens Work',
    description: "Tokens replace passwords for every request after login. A secure, stateless way to prove identity without sending credentials repeatedly over the wire.",
    runnable: true,
    runnerTitle: 'Simulate login → token → protected request',
    starterCode: `// Simulate the full token auth flow

// ── Token generation (server-side at login) ──────────────
function signToken(payload, secret, expiresInSecs) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const expAt  = Math.floor(Date.now() / 1000) + expiresInSecs;
  const pl     = btoa(JSON.stringify({ ...payload, iat: Math.floor(Date.now() / 1000), exp: expAt }));
  const sig    = btoa(\`signed_with_\${secret}\`); // simplified
  return \`\${header}.\${pl}.\${sig}\`;
}

function decodeToken(token) {
  try {
    const [, payload] = token.split(".");
    return JSON.parse(atob(payload));
  } catch { return null; }
}

function isExpired(token) {
  const decoded = decodeToken(token);
  return decoded ? decoded.exp < Math.floor(Date.now() / 1000) : true;
}

// ── Simulate login endpoint ───────────────────────────────
function login(email, password) {
  const users = { "rasheed@devpath.com": { id: 42, role: "admin", passwordHash: "hashed_pass123" } };
  const user  = users[email];
  if (!user || password !== "pass123") throw new Error("Invalid credentials");
  
  const accessToken  = signToken({ id: user.id, email, role: user.role }, "JWT_SECRET", 900);    // 15 min
  const refreshToken = signToken({ id: user.id }, "REFRESH_SECRET", 604800); // 7 days
  return { accessToken, refreshToken, user: { id: user.id, email, role: user.role } };
}

// ── Simulate protected endpoint ───────────────────────────
function requireAuth(token) {
  if (!token) throw new Error("401: No token provided");
  if (isExpired(token)) throw new Error("401: Token expired");
  return decodeToken(token);
}

// ── Run the flow ──────────────────────────────────────────
console.log("=== 1. Login ===");
const { accessToken, refreshToken, user } = login("rasheed@devpath.com", "pass123");
console.log("User:", user);
console.log("Access token:", accessToken.substring(0, 60) + "...");

console.log("\\n=== 2. Decode token (anyone can do this!) ===");
const decoded = decodeToken(accessToken);
console.log("Decoded payload:", decoded);
console.log("Expires at:", new Date(decoded.exp * 1000).toLocaleString());

console.log("\\n=== 3. Access protected route ===");
try {
  const authUser = requireAuth(accessToken);
  console.log("✅ Authenticated as:", authUser.email, "| Role:", authUser.role);
} catch (e) { console.log("❌", e.message); }

console.log("\\n=== 4. Try expired token ===");
try {
  requireAuth("eyJ.expired_token.sig");
} catch (e) { console.log("❌", e.message); }`,
    content: [
      {
        type: 'code', lang: 'javascript', label: 'Login endpoint — issues access + refresh tokens',
        code: `app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !await bcrypt.compare(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Access token — short-lived (15min)
  const accessToken = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  // Refresh token — long-lived (7d), stored in httpOnly cookie
  const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET, { expiresIn: '7d' });

  res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'strict' });
  res.json({ accessToken, user: { id: user.id, email, role: user.role } });
});`,
      },
      { type: 'callout', variant: 'danger', text: '<strong>Never store tokens in localStorage</strong> — vulnerable to XSS. Refresh tokens go in httpOnly cookies. Access tokens only in memory.' },
    ],
  },

  {
    id: 16,
    section: 'Auth & Security',
    tag: 'Auth',
    tagColor: 'yellow',
    title: 'JWTs Deep Dive',
    description: "A JWT (JSON Web Token) is a compact, URL-safe token made of three Base64-encoded parts. Self-contained — no database lookup needed to validate it.",
    runnable: true,
    runnerTitle: 'Inspect a real JWT structure',
    starterCode: `// Inspect JWT structure and understand what each part means

// A real-ish JWT token
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsImVtYWlsIjoicmFzaGVlZEBkZXZwYXRoLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNjAwMDAwMCwiZXhwIjoxNzA2MDAwOTAwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

function inspectJWT(token) {
  const parts = token.split(".");
  if (parts.length !== 3) return console.log("Not a valid JWT");
  
  const [rawHeader, rawPayload, signature] = parts;
  
  // Base64URL decode (add padding if needed)
  function decode(str) {
    const padded = str + "=".repeat((4 - str.length % 4) % 4);
    return JSON.parse(atob(padded.replace(/-/g, "+").replace(/_/g, "/")));
  }
  
  const header  = decode(rawHeader);
  const payload = decode(rawPayload);
  
  console.log("=== JWT HEADER ===");
  console.log(JSON.stringify(header, null, 2));
  console.log("→ Algorithm:", header.alg, "| Type:", header.typ);
  
  console.log("\\n=== JWT PAYLOAD (claims) ===");
  console.log(JSON.stringify(payload, null, 2));
  console.log("→ User ID:", payload.id);
  console.log("→ Role:", payload.role);
  console.log("→ Issued at:", new Date(payload.iat * 1000).toLocaleString());
  console.log("→ Expires at:", new Date(payload.exp * 1000).toLocaleString());
  console.log("→ Already expired?", payload.exp < Date.now() / 1000 ? "YES ⚠️" : "NO ✅");
  
  console.log("\\n=== JWT SIGNATURE ===");
  console.log(signature);
  console.log("→ Prevents tampering. Changing ANY byte in header/payload breaks this.");
  
  console.log("\\n⚠️  IMPORTANT: The payload is base64-encoded, NOT encrypted.");
  console.log("    Anyone can decode it. Never put passwords or secrets in a JWT!");
}

inspectJWT(token);`,
    content: [
      {
        type: 'token',
        parts: [
          { label: 'Header', sublabel: 'Algorithm + type', colorClass: 'tp-h', text: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' },
          { label: 'Payload', sublabel: 'Your claims (data)', colorClass: 'tp-p', text: 'eyJpZCI6NDIsImVtYWlsIjoieXVub0BleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIn0' },
          { label: 'Signature', sublabel: 'Tamper proof', colorClass: 'tp-s', text: 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' },
        ],
      },
      { type: 'callout', variant: 'danger', text: '<strong>JWT is NOT encrypted.</strong> Anyone can Base64-decode the payload. The signature only proves it wasn\'t tampered with. Never put passwords or secrets in the payload.' },
      {
        type: 'code', lang: 'javascript', label: 'Sign and verify JWTs',
        code: `const jwt = require('jsonwebtoken');

// Sign
const token = jwt.sign(
  { id: 42, role: 'admin' },
  process.env.JWT_SECRET,
  { expiresIn: '15m', issuer: 'devpath.com' }
);

// Verify — throws if invalid or expired
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded.id);   // 42
  console.log(decoded.role); // 'admin'
} catch (err) {
  if (err.name === 'TokenExpiredError') { /* use refresh token */ }
  if (err.name === 'JsonWebTokenError') { /* invalid */ }
}`,
      },
    ],
  },

  {
    id: 17,
    section: 'Auth & Security',
    tag: 'Auth',
    tagColor: 'yellow',
    title: 'API Keys',
    description: "API keys are static tokens for machine-to-machine authentication. Simpler than JWT but need careful implementation — hashing, rate limiting, and rotation.",
    runnable: true,
    runnerTitle: 'Generate and validate API keys',
    starterCode: `// Simulate secure API key generation and validation

// ── Generate a secure API key ─────────────────────────────
function generateApiKey(prefix = "devpath") {
  // In real Node.js: crypto.randomBytes(32).toString('hex')
  const randomPart = Array.from({ length: 64 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");
  return \`\${prefix}_\${randomPart}\`;
}

// ── Hash the key (simulate SHA-256) ──────────────────────
function hashKey(key) {
  // In real Node.js: crypto.createHash('sha256').update(key).digest('hex')
  // Here we simulate a simple hash for demo
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash) + key.charCodeAt(i);
    hash |= 0;
  }
  return "sha256_sim_" + Math.abs(hash).toString(16).padStart(16, "0");
}

// ── In-memory key store (simulates DB) ───────────────────
const keyStore = new Map();

function createApiKey(userId, name) {
  const rawKey    = generateApiKey();
  const hashedKey = hashKey(rawKey);
  keyStore.set(hashedKey, { userId, name, createdAt: new Date().toISOString(), requests: 0 });
  console.log(\`✅ Created key for user \${userId}: \${name}\`);
  console.log(\`   Raw key (shown ONCE): \${rawKey.substring(0, 30)}...\`);
  console.log(\`   Stored hash: \${hashedKey}\`);
  return rawKey; // Only shown once, never stored
}

function validateApiKey(incomingKey) {
  const hash = hashKey(incomingKey);
  const record = keyStore.get(hash);
  if (!record) return { valid: false, error: "Invalid API key" };
  record.requests++;
  return { valid: true, userId: record.userId, name: record.name };
}

// ── Run the demo ──────────────────────────────────────────
console.log("=== Create API Keys ===");
const key1 = createApiKey(42, "Production App");
const key2 = createApiKey(42, "CI/CD Pipeline");

console.log("\\n=== Validate keys ===");
const result1 = validateApiKey(key1);
console.log("Key 1 valid?", result1.valid, "→", result1.name);

const result2 = validateApiKey("devpath_fakekeyhere123");
console.log("Fake key valid?", result2.valid, "→", result2.error);

console.log("\\n=== Key store (DB simulation) ===");
console.log("Stored", keyStore.size, "hashed keys — raw keys are NEVER stored");`,
    content: [
      {
        type: 'table',
        title: 'API Key vs JWT — When to Use Which',
        headers: ['Factor', 'API Key', 'JWT'],
        rows: [
          ['Identifies',    'An application / integration',   'A specific user + their claims'],
          ['Expiration',    'Manual — you rotate when needed','Automatic — built-in expiry'],
          ['Stateless?',    'No — requires DB lookup',        'Yes — self-contained'],
          ['Best for',      'Server-to-server, public APIs',  'User sessions, mobile, SPAs'],
          ['Revocation',    'Delete from DB instantly',       'Needs blocklist or wait for expiry'],
        ],
      },
    ],
  },

  // ─ SECTION 4: PROJECT ────────────────────────────────────────
  {
    id: 18,
    section: 'Project',
    tag: 'Project',
    tagColor: 'green',
    title: 'Build the Blog API',
    description: "Everything comes together. A production-ready Blog API with authentication, pagination, ORM, and proper error handling — from folder structure to running server.",
    runnable: true,
    runnerTitle: 'Assemble the full API logic',
    starterCode: `// Full Blog API simulation — all layers working together

// ── In-memory data store ──────────────────────────────────
const db = {
  users: [{ id: 1, name: "Rasheed", email: "r@devpath.com", role: "admin", passwordHash: "hash" }],
  posts: [{ id: 1, title: "Intro to APIs", content: "...", authorId: 1, published: true, createdAt: new Date().toISOString() }],
  nextPostId: 2,
};

// ── Middleware simulation ─────────────────────────────────
function requireAuth(req) {
  if (!req.headers?.authorization) throw { status: 401, message: "No token provided" };
  // In real app: jwt.verify(token, secret)
  return { id: 1, role: "admin" };
}

// ── Controllers ───────────────────────────────────────────
const PostController = {
  getAll({ query = {} }) {
    const page  = parseInt(query.page  || 1);
    const limit = parseInt(query.limit || 5);
    const skip  = (page - 1) * limit;
    const total = db.posts.length;
    const data  = db.posts.slice(skip, skip + limit).map(p => ({
      ...p, author: db.users.find(u => u.id === p.authorId),
    }));
    return { status: 200, body: { success: true, data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } } };
  },

  getOne({ params }) {
    const post = db.posts.find(p => p.id === parseInt(params.id));
    if (!post) return { status: 404, body: { error: "Post not found" } };
    return { status: 200, body: { success: true, data: { ...post, author: db.users.find(u => u.id === post.authorId) } } };
  },

  create({ body, user }) {
    if (!body.title) return { status: 422, body: { error: "title is required" } };
    const post = { id: db.nextPostId++, ...body, authorId: user.id, published: false, createdAt: new Date().toISOString() };
    db.posts.push(post);
    return { status: 201, body: { success: true, data: post } };
  },

  delete({ params, user }) {
    const idx = db.posts.findIndex(p => p.id === parseInt(params.id));
    if (idx === -1) return { status: 404, body: { error: "Not found" } };
    if (db.posts[idx].authorId !== user.id && user.role !== "admin")
      return { status: 403, body: { error: "Forbidden" } };
    db.posts.splice(idx, 1);
    return { status: 204, body: null };
  },
};

// ── Simulate API calls ────────────────────────────────────
function request(method, path, { query = {}, params = {}, body = {}, headers = {} } = {}) {
  try {
    const user = headers.authorization ? requireAuth({ headers }) : null;
    const ctx  = { query, params, body, headers, user };
    
    if (method === "GET"    && path === "/posts")     return PostController.getAll(ctx);
    if (method === "GET"    && params.id)             return PostController.getOne(ctx);
    if (method === "POST"   && path === "/posts")     { if (!user) throw { status: 401, message: "Auth required" }; return PostController.create({...ctx, user}); }
    if (method === "DELETE" && params.id !== undefined) { if (!user) throw { status: 401, message: "Auth required" }; return PostController.delete({...ctx, user}); }
    return { status: 404, body: { error: "Route not found" } };
  } catch(e) {
    return { status: e.status || 500, body: { error: e.message } };
  }
}

// Test all routes
console.log("GET /posts:", JSON.stringify(request("GET", "/posts", { query: { page: "1", limit: "5" } })));
console.log("\\nGET /posts/1:", JSON.stringify(request("GET", "/posts/1", { params: { id: "1" } })));
console.log("\\nPOST /posts (unauth):", JSON.stringify(request("POST", "/posts", { body: { title: "New" } })));
console.log("\\nPOST /posts (auth):", JSON.stringify(request("POST", "/posts", { body: { title: "New Post" }, headers: { authorization: "Bearer token" } })));
console.log("\\nDELETE /posts/99:", JSON.stringify(request("DELETE", "/posts/99", { params: { id: "99" }, headers: { authorization: "Bearer token" } })));`,
    content: [
      {
        type: 'code', lang: 'bash', label: 'Project setup',
        code: `mkdir blog-api && cd blog-api
npm init -y
npm install express jsonwebtoken bcryptjs cors helmet dotenv @prisma/client express-rate-limit
npm install -D prisma nodemon
npx prisma init --datasource-provider postgresql`,
      },
      {
        type: 'code', lang: 'text', label: 'Folder structure',
        code: `blog-api/
├── src/
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── posts.routes.js
│   │   └── users.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── posts.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   └── app.js
├── prisma/schema.prisma
├── .env
└── package.json`,
      },
    ],
  },

  {
    id: 19,
    section: 'Project',
    tag: 'Deploy',
    tagColor: 'red',
    title: 'API Deployment',
    description: "The final step — taking your local API live. Hosting platform selection, environment config, and the production checklist every deployment needs.",
    runnable: false,
    content: [
      {
        type: 'status-list',
        title: 'Hosting Platforms',
        items: [
          { code: 'Railway', codeColor: 'green',  name: 'Easiest',         desc: 'Deploy from GitHub in 2 minutes. Free tier. Managed Postgres. Best starting point.' },
          { code: 'Render',  codeColor: 'green',  name: 'Free + reliable', desc: 'Auto-deploy from Git. Free tier with managed PostgreSQL. Great DX.' },
          { code: 'Fly.io',  codeColor: 'blue',   name: 'Docker-based',   desc: 'Containerized apps globally. More control. Very low cost. Good for edge presence.' },
          { code: 'AWS/GCP', codeColor: 'yellow', name: 'Production scale',desc: 'EC2, Lambda, Cloud Run. Use when you need to scale to millions of requests.' },
          { code: 'Vercel',  codeColor: 'purple', name: 'Serverless',     desc: 'Great for Next.js APIs. Zero config. Best for frontend-heavy projects.' },
        ],
      },
      {
        type: 'code', lang: 'bash', label: '.env — production variables',
        code: `NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@host:5432/mydb?sslmode=require
JWT_SECRET=generate-256-bit-random-secret-here
REFRESH_SECRET=another-256-bit-secret-different-from-above
CORS_ORIGIN=https://myfrontend.com`,
      },
      {
        type: 'pills',
        title: 'Production Security Checklist',
        items: [
          { label: '✓ HTTPS only',         color: 'green' },
          { label: '✓ Validate all input', color: 'green' },
          { label: '✓ Rate limiting',      color: 'green' },
          { label: '✓ Helmet.js headers',  color: 'green' },
          { label: '✓ Env vars for secrets', color: 'green' },
          { label: '✓ CORS configured',    color: 'green' },
          { label: '✗ No secrets in code', color: 'red' },
          { label: '✗ No .env in git',     color: 'red' },
          { label: '✗ No stack traces to client', color: 'red' },
        ],
      },
    ],
  },
]

export const COURSES_DATA = {
  'api-express': {
    ...CATALOG.find(c => c.id === 'api-express'),
    lessons: API_COURSE_LESSONS,
  },
}
