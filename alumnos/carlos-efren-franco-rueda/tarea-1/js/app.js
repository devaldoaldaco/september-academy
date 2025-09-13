document.querySelector(".search-box input")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      alert("Buscar: " + e.target.value);
    }
  });