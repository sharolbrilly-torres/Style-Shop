export default async function handler(req, res) {
  // Verificar método
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {
    // Obtener API Key
    const apiKey = process.env.GEMINI_API_KEY;

    console.log(
      "¿Existe GEMINI_API_KEY?:",
      !!apiKey
    );

    console.log(
      "Longitud de GEMINI_API_KEY:",
      apiKey ? apiKey.length : 0
    );

    // Comprobar que Vercel tenga la variable
    if (!apiKey) {
      return res.status(500).json({
        error: "Vercel no está recibiendo GEMINI_API_KEY"
      });
    }

    // Obtener prompt
    const { prompt } = req.body || {};

    if (!prompt) {
      return res.status(400).json({
        error: "Falta el prompt"
      });
    }

    // Limpiar espacios accidentales
    const cleanApiKey = apiKey.trim();

    console.log("Enviando petición a Gemini...");

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": cleanApiKey
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
            temperature: 0.7,
            topP: 0.9,
            maxOutputTokens: 800
          }
        })
      }
    );

    const data = await response.json();

    console.log(
      "Respuesta de Gemini:",
      response.status
    );

    // Gemini devolvió error
    if (!response.ok) {
      console.error(
        "Gemini respondió con error:",
        JSON.stringify(data)
      );

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "Gemini rechazó la solicitud"
      });
    }

    // Obtener respuesta
    const texto =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!texto) {
      console.error(
        "Gemini no devolvió texto:",
        JSON.stringify(data)
      );

      return res.status(500).json({
        error: "Gemini no devolvió una respuesta válida"
      });
    }

    return res.status(200).json({
      respuesta: texto
    });

  } catch (error) {
    console.error(
      "Error interno:",
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        "Error interno del servidor"
    });
  }
}