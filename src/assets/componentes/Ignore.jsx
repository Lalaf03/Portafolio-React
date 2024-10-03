import React from "react";

function Ignore() {
  return (
    <div className="ignore">
      <h1>¿Cómo utilizar git ignore?</h1>
      <div className="pasos">
        <h2>Paso 1: Crear un archivo .gitignore</h2>
        <ul>
          <li>
            Navega a tu proyecto: Abre la terminal y navega al directorio de tu
            proyecto.
          </li>
          <li>
            Puedes crear un archivo .gitignore con el siguiente comando:
            <ul>
              <li>touch .gitignore</li>
            </ul>
          </li>
          <li>
            Abre el archivo .gitignore con tu editor de texto preferido (puedes
            usar nano, vim, VS Code, etc.).
          </li>
        </ul>
        <h2>Paso 2: Especificar archivos o directorios a ignorar</h2>
        <ul>
          <li>
            Añadir reglas de ignorar: En el archivo .gitignore, escribe las
            reglas para los archivos y carpetas que quieres ignorar.
            <ul>
              <li>
                Ignorar archivos temporales:
                <ul>
                  <li>*.tmp</li>
                  <li>*.log</li>
                </ul>
              </li>
              <li>
                Ignorar directorio de configuración:
                <ul>
                  <li>config/</li>
                </ul>
              </li>
              <li>
                Ignorar archivos binarios:
                <ul>
                  <li>**.exe</li>
                  <li>**.dll</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h2>Paso 3: Añadir y confirmar los cambios</h2>
        <p>
          Añadir el archivo .gitignore a Git
          <ul>
            <li>git add .gitignore</li>
            <li>git commit -m "Añadido archivo .gitignore"</li>
          </ul>
        </p>
        <h2>Paso 4: Empujar los cambios a GitHub</h2>
        <p>
          Finalmente, sube los cambios a tu repositorio remoto en GitHub con
          <ul>
            <li>git push origin main</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Ignore;
