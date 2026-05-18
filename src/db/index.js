let connected = false;

function connect() {
  connected = true;

  console.log("Database connected");

  return connected;
}

function getStatus() {
  return connected;
}

module.exports = {
  connect,
  getStatus,
};

