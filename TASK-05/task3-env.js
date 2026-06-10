// Task 3: Check Required Environment Variable
// Run with: node task3_env_variable.js
// To test with PORT set: PORT=8080 node task3_env_variable.js

const port = process.env.PORT;

if (port) {
  console.log(`Port: ${port}`);
} else {
  console.log("Default Port: 3000");
}