#LESSON 4: What is Node?

What is node for?
- Allows you to run JavaScript on your server (rather than only on client)
- Uses V8 engine
- Node adds unique features

Key node features
- Event driven: node can track events happening on server, just like client waits for doc ready (or user click)
- Non-blocking: helps with complex database queries
- Two way connections: node is better at connections between the server and a database (doesn't need to wait) --> more efficient than traditional server languages
- real-time web applications (b/c node can handle multiple connections simultaneously)

Node challenges
- Doesn't run on traditional services, so you need a viable host such as Heroku (https://www.heroku.com/)
- Requires advanced JavaScript
- Lots of dev installs
- Node is a concise library, so you need to add *modules* to expand its capabilities
- Node was designed for helping servers, not creating sites. You need a framework such as *express.js* on top of node to make user-friendly websites.
