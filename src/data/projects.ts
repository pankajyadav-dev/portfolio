import { motion } from "framer-motion";

export const projectsData = [
  {
    id: "chitra",
    title: "Chitra",
    highlight: "AI/ML Context Optimization CLI Tool",
    description: "Architect a high-performance codebase context-resolution CLI in Rust, utilizing Tree-sitter for Abstract Syntax Tree parsing to build a blazing-fast, vectorless Agentic RAG pipeline.",
    content: `
Chitra is an AI/ML Context Optimization CLI Tool. 

### Architecture
Architect a high-performance codebase context-resolution CLI in Rust, utilizing Tree-sitter for Abstract Syntax Tree parsing to build a blazing-fast, vectorless Agentic RAG pipeline.

### Investigation Loop
Implement an autonomous investigation loop where local, on-device LLMs execute native tools (ripgrep, AST extraction) to dynamically map dependencies without heavy static indexing.

### Optimization
Optimize Large Language Model token consumption and API costs by synthesizing raw codebase logic into highly compressed, targeted prompt payloads, maximizing the accuracy of flagship models.
    `,
    techStack: ["Rust", "Tree-sitter", "Local LLMs", "Agentic RAG"], 
    githubUrl: "https://github.com/pankajyadav-dev/chitra",
    liveUrl: "",
    bgAnimationType: "neural"
  },
  {
    id: "ironjudge",
    title: "IronJudge",
    highlight: "⚔️ Sandboxed Execution Engine",
    description: "A blazing-fast, sandboxed code execution engine built in Rust. Executes untrusted code securely using Linux namespaces, cgroups v2, chroot & seccomp. Features async job pipeline via Redis Streams, multi-language support (C++, Rust, Java, Python, JS, TS)",
    content: `
IronJudge is a production-ready, highly scalable, and secure code execution engine built entirely in Rust. It is designed to act as the core backend for competitive programming platforms, online IDEs, and interview tools where untrusted user code needs to be executed safely.

### Architecture
The system consists of two main microservices connected via a Redis stream:
1. **HTTP API Server (Axum):** Validates incoming execution requests, enqueues jobs onto a Redis Stream, and provides endpoints to poll execution status.
2. **Worker Engine:** Continuously pulls jobs from the Redis Stream, orchestrates the secure execution environment, compiles/runs the code, checks against expected outputs, and pushes results back to Redis.

### Security Model (Defense in Depth)
The core challenge in building IronJudge was securely running arbitrary code without relying on heavy VM hypervisors. It uses Linux-native isolation techniques:
- **Namespaces (PID, Mount, UTS, NET):** Ensures the running code cannot see other processes on the host, cannot access the host filesystem (chroot), cannot view the hostname, and has no internet access.
- **Cgroups v2:** Enforces strict limitations on memory consumption and CPU sharing. If a process exceeds its memory limit (e.g., 256MB), it is instantly OOM-killed.
- **Seccomp BPF (Secure Computing Mode):** A whitelist of allowed system calls is applied to the untrusted process. Any attempt to use dangerous syscalls (like execve, ptrace, or fork) immediately terminates the process with a SIGKILL.

### Performance
Because it bypasses the overhead of spinning up entire Docker containers per submission, IronJudge can initialize a sandbox, compile C++, execute the binary, and tear down the environment in under 100 milliseconds.
    `,
    techStack: ["Rust", "Axum", "Redis", "Docker", "Linux", "seccomp"],
    githubUrl: "https://github.com/pankajyadav-dev/ironjudge",
    liveUrl: "https://ironjudge.1000xdevs.dev/",
    bgAnimationType: "engine"
  },
  {
    id: "xforces",
    title: "xForces",
    highlight: "🏆 Competitive Programming Platform",
    description: "A high-performance competitive programming platform designed to host coding contests, practice problems, and provide real-time code execution. Features a microservices architecture with Next.js frontend, Redis message queue, and Docker-based sandboxing.",
    content: `
xForces is a modern alternative to traditional competitive programming websites. It provides a sleek, fast, and feature-rich interface for hosting and participating in algorithmic coding contests.

### Tech Stack Evolution
Originally built with a Next.js frontend and a Node.js/Bun execution worker, xForces later required a much more robust execution engine to handle malicious submissions and high concurrency. This led to the creation of **IronJudge**, which is now integrated as the core execution backend for xForces.

### Key Features
- **Real-Time Execution:** Users can write code in the browser using the integrated Monaco Editor, submit it, and receive instant feedback (Accepted, Wrong Answer, Time Limit Exceeded, Memory Limit Exceeded).
- **Contest System:** Administrators can create time-bound contests, assign problems, and generate live leaderboards based on the ICPC or standard Codeforces scoring models.
- **User Dashboard:** A comprehensive profile system that tracks a user's rating changes over time, problems solved, and recent submissions.
- **Database Architecture:** Uses PostgreSQL via Prisma ORM to efficiently store thousands of problems, test cases, and millions of user submissions.

### The Problem Solving Experience
The platform emphasizes speed. The split-pane UI allows users to read the problem statement while coding simultaneously. Test cases are evaluated concurrently to minimize wait times, providing a seamless "flow state" for competitive programmers.
    `,
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
    githubUrl: "https://github.com/pankajyadav-dev/xforces",
    liveUrl: "https://xforces.1000xdevs.dev/",
    bgAnimationType: "algo"
  }
];