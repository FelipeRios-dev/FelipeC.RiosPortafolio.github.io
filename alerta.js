console.log("ALERTA.js cargado correctamente.");


(function () {
  // Esperar a que el DOM esté listo
  document.addEventListener("DOMContentLoaded", function () {

    // Crear estilos
    const style = document.createElement("style");
    style.textContent = `
      #alert-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999999;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        pointer-events: none;
      }

      #alert-box {
        margin-top: 20px;
        background: #111;
        color: #fff;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 90%;
        font-family: Arial, sans-serif;
        pointer-events: auto;
      }

      #alert-box p {
        margin: 0;
        font-size: 14px;
        line-height: 1.4;
      }

      #alert-box button {
        background: #ff5c5c;
        border: none;
        color: #fff;
        padding: 6px 12px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
      }

      #alert-box button:hover {
        background: #e04b4b;
      }
    `;
    document.head.appendChild(style);

    // Crear estructura HTML
    const overlay = document.createElement("div");
    overlay.id = "alert-overlay";

    overlay.innerHTML = `
      <div id="alert-box">
        <p>
          ⚠️ Esta página está siendo reestructurada en su totalidad.
          Pronto, toda su información estará actualizada.
        </p>
        <button id="alert-close">Cerrar</button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Botón cerrar
    document.getElementById("alert-close").addEventListener("click", function () {
      overlay.remove();
    });
  });
})();
