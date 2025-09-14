document.getElementById("reportForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    type: document.getElementById("type").value,
    location: document.getElementById("location").value,
    description: document.getElementById("description").value,
  };

  // send to backend
  const res = await fetch("http://localhost:5000/report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("message").innerText = result.message;
});
