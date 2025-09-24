async function getNasaPhotos() {
  try {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=GUL53Rv2OjUTSpiTek8Zgzy3siwNYiaxlrrhwc1K&count=5");
    const data = await response.json();

    console.log("Datos de la API:", data);

    const tbody = document.querySelector("#nasaTable tbody");
    tbody.innerHTML = ""; // limpia antes de volver a insertar

    if (!Array.isArray(data)) {
      console.error("La API devolvió un error:", data);
      return;
    }

    data.forEach(item => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td data-label="Título">${item.title}</td>
        <td data-label="Fecha">${item.date}</td>
        <td data-label="Imagen">
          <a href="${item.url}" target="_blank">
            <img src="${item.url}" alt="${item.title}" style="max-width:150px; border-radius:10px;">
          </a>
        </td>
        <td data-label="Descripción">${item.explanation.substring(0, 120)}...</td>
      `;

      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error al obtener datos de la NASA:", error);
  }
}

getNasaPhotos();
