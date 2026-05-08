function verificarDatos() {

    // Obtener el texto ingresado
    let texto = document.getElementById("textoHistorico").value;

    // Obtener el área de respuesta
    let respuesta = document.getElementById("respuestaIA");

    // Verificar si el usuario escribió algo
    if (texto.trim() === "") {

        respuesta.innerHTML = `
            ⚠️ Por favor, ingresa un texto histórico.
        `;

        return;
    }

    // Simulación básica de análisis con IA
    let resultado = "";

    // Búsqueda simple de palabras históricas
   if (
    texto.toLowerCase().includes("colón") ||
    texto.toLowerCase().includes("independencia") ||
    texto.toLowerCase().includes("real audiencia") ||
    texto.toLowerCase().includes("virreinato") ||
    texto.toLowerCase().includes("colonial") ||
    texto.toLowerCase().includes("colonia") ||
    texto.toLowerCase().includes("conquista") ||
    texto.toLowerCase().includes("imperio español") ||
    texto.toLowerCase().includes("españa")
) {

        resultado = `
            ✅ El texto contiene elementos relacionados
            con la historia colonial.

            🔎 La IA detectó posibles referencias históricas
            válidas para análisis.
        `;

    } else {

        resultado = `
            ❌ No se encontraron suficientes referencias
            históricas coloniales en el texto.

            📚 Intenta agregar fechas, personajes o eventos históricos.
        `;
    }

    // Mostrar resultado
    respuesta.innerHTML = resultado;
}
