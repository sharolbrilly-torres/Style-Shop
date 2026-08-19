export default async function handler(req, res) {

  // Verificar que la petición sea POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {

    // Recibir el prompt enviado desde app.js
    const { prompt } = req.body || {};

    // Verificar que exista el prompt
    if (!prompt) {
      return res.status(400).json({
        error: "Falta el prompt"
      });
    }

    // Consultar Gemini
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },

        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],

          generationConfig: {
            maxOutputTokens: 800
          }
        })
      }
    );

    // Convertir la respuesta de Gemini a JSON
    const data = await response.json();

    // Revisar si Gemini respondió con un error
    if (!response.ok) {

      console.error("Error de Gemini:", data);

      return res.status(response.status).json({
        error:
          data.error?.message ||
          "Error al consultar Gemini"
      });
    }

    // Extraer el texto generado por Gemini
    const texto =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    // Verificar que Gemini haya enviado texto
    if (!texto) {

      console.error(
        "Respuesta inesperada de Gemini:",
        data
      );

      return res.status(500).json({
        error: "Gemini no devolvió una respuesta válida"
      });
    }

    // Enviar la respuesta a app.js
    return res.status(200).json({
      respuesta: texto
    });

  } catch (error) {

    console.error(
      "Error interno en /api/gemini:",
      error
    );

    return res.status(500).json({
      error:
        error.message ||
        "Error interno del servidor"
    });
  }
}
