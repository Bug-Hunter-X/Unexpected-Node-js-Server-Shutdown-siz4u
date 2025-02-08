# Unexpected Node.js Server Shutdown

This repository demonstrates an example of an uncommon Node.js error: unexpected server shutdown.  The issue arises from unhandled exceptions or improper server closure, potentially leading to resource leaks and unexpected termination.

## Bug Description
The provided `server.js` file contains a simple HTTP server.  However, it lacks proper error handling and shutdown procedures, making it vulnerable to unexpected termination.

## Bug Solution
The `serverSolution.js` file demonstrates how to mitigate this issue by implementing robust error handling using `process.on('uncaughtException')` and a graceful shutdown mechanism using `server.close()`. 

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node server.js` (for the buggy version).
4. Observe the server behavior. It may shut down unexpectedly if unhandled exceptions are triggered.
5. Run `node serverSolution.js` (for the fixed version).  It will demonstrate the graceful shutdown process.