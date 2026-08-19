const btnGenerar = document.getElementById("btnGenerar");
const inputCliente = document.getElementById("inputCliente");
const resultadoIA = document.getElementById("resultadoIA");

const catalogo = `
CATÁLOGO DE STYLE SHOP:

1. Camiseta Basic — $35.000 — Tallas S, M, L, XL
2. Camiseta Urban — $42.000 — Tallas S, M, L, XL
3. Camisa Classic — $58.000 — Tallas S, M, L, XL
4. Jean Essential — $95.000 — Tallas 28, 30, 32, 34, 36
5. Pantalón Cargo — $78.000 — Tallas 28, 30, 32, 34, 36
6. Vestido Luna — $85.000 — Tallas S, M, L
7. Falda Trend — $55.000 — Tallas S, M, L
8. Sudadera Street — $90.000 — Tallas S, M, L, XL
9. Chaqueta Urban — $120.000 — Tallas S, M, L, XL
10. Buzo Comfort — $75.000 — Tallas S, M, L, XL
`;

btnGenerar.addEventListener("click", async () => {

    const pregunta = inputCliente.value.trim();

    if (!pregunta) {
        resultadoIA.textContent =
            "Escribe qué prenda estás buscando.";
        return;
    }

    resultadoIA.textContent =
        "Consultando al asistente...";

    const prompt = `
Eres el asistente virtual de Style Shop.

Tu función es ayudar a los clientes a encontrar prendas
utilizando únicamente la información del catálogo.

${catalogo}

Reglas:
- Responde en español.
- Sé amable y claro.
- No inventes productos, precios ni tallas.
- Si el cliente indica un presupuesto, respétalo.
- Recomienda las prendas que mejor coincidan con su solicitud.
- Si falta información, haz una pregunta sencilla.
- Puedes indicar que el pedido puede coordinarse por WhatsApp.

Consulta del cliente:
${pregunta}
`;

    try {

        const response = await fetch("/api/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error ||
                "No se pudo conectar con Gemini."
            );
        }

        resultadoIA.textContent =
            data.respuesta ||
            "No recibimos una respuesta del asistente.";

    } catch (error) {

        console.error("Error:", error);

        resultadoIA.textContent =
            "Ocurrió un error al conectar con el asistente.";
    }
});