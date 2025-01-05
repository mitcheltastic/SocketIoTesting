// Replace with your production backend URL
const BASE_URL = "https://sijaga-railway-production.up.railway.app";

// Register User
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await axios.post(`${BASE_URL}/register`, { name, email, password });
    document.getElementById("registerResponse").innerText = `Success: ${JSON.stringify(response.data)}`;
  } catch (error) {
    document.getElementById("registerResponse").innerText = `Error: ${error.response.data.message}`;
  }
});

// Login User
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    document.getElementById("loginResponse").innerText = `Success: ${JSON.stringify(response.data)}`;
  } catch (error) {
    document.getElementById("loginResponse").innerText = `Error: ${error.response.data.message}`;
  }
});

// Real-Time Communication with Socket.IO
document.getElementById("connectSocket").addEventListener("click", () => {
  const socket = io(BASE_URL);

  document.getElementById("socketStatus").innerText = "Connecting to socket...";

  socket.on("connect", () => {
    document.getElementById("socketStatus").innerText = "Socket connected!";
    socket.on("message", (msg) => {
      alert(`Message from server: ${msg}`);
    });
  });

  socket.on("disconnect", () => {
    document.getElementById("socketStatus").innerText = "Socket disconnected!";
  });

  socket.on("connect_error", (err) => {
    document.getElementById("socketStatus").innerText = `Connection error: ${err.message}`;
  });
});
