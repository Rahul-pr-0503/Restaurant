document.getElementById("resForm").onsubmit = function(e) {
    e.preventDefault();
    document.getElementById("msg").textContent = "Reservation confirmed! ✅";
    document.getElementById("msg").style.color = "green";
    this.reset();
  };