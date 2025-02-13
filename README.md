# Node.js Graceful Shutdown Bug

This repository demonstrates a common issue in Node.js where HTTP servers don't gracefully shut down when interrupted (e.g., with Ctrl+C).  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The original server lacks proper handling of `SIGINT` (Ctrl+C) and other termination signals.  This results in open connections being abruptly closed, potentially leading to data loss or inconsistencies.

## Solution

The solution utilizes the `process` module's event listeners to gracefully handle termination signals.  Before exiting, the server waits for in-flight requests to complete before closing, ensuring a clean shutdown.