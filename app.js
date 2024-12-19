// Connect to the backend server
const socket = io("http://localhost:3000"); // Change this to your backend URL if deployed

// Get DOM elements
const statusElement = document.getElementById("status");
const logsElement = document.getElementById("logs");

// Function to add logs to the list
const addLog = (message) => {
  const li = document.createElement("li");
  li.textContent = message;
  logsElement.appendChild(li);
};

// Handle connection events
socket.on("connect", () => {
  statusElement.textContent = "Connected to server!";
  addLog("Connected to server successfully.");
});

socket.on("disconnect", () => {
  statusElement.textContent = "Disconnected from server.";
  addLog("Disconnected from server.");
});

// Listen for `usageHistory_update` event
socket.on("usageHistory_update", (data) => {
  addLog(`New usageHistory update: ${JSON.stringify(data)}`);
});

// Listen for `lockedStatus_update` event
socket.on("lockedStatus_update", (data) => {
  addLog(`New lockedStatus update: ${JSON.stringify(data)}`);
});

// (Optional) Listen for fetch events
socket.on("usageHistory_fetch", (data) => {
  addLog(`Usage history fetched: ${JSON.stringify(data)}`);
});
