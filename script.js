document.getElementById("paymentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();

  const response = await fetch("http://localhost:4000/api/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cardNumber, expiry }),
  });

  const data = await response.json();
  alert(data.message || "To‘lov muvaffaqiyatli!");
});
