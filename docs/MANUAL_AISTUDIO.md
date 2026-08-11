# Manual de Google AI Studio — Style Shop

## 1. Información del proyecto

**Nombre:** Style Shop

**Tipo de proyecto:** Tienda virtual de prendas de vestir.

**Componente desarrollado:** Asistente virtual de atención al cliente.

El asistente ayuda a los clientes a consultar el catálogo y recibir recomendaciones de prendas según sus necesidades y presupuesto.

---

## 2. Configuración en Google AI Studio

Se utilizó Google AI Studio para diseñar y probar el asistente virtual.

### Modelo utilizado

**Gemini 3 Flash Preview**

### Parámetros

- Temperature: 0.7
- Top-P: 0.9
- Thinking level: configuración predeterminada.

---

## 3. System Instruction

Se configuró el asistente con el siguiente propósito:

> Eres el asistente virtual oficial de Style Shop. Tu función es ayudar a los clientes a consultar productos, recomendar prendas y orientar sobre los pedidos.

El asistente debe:

- Responder en español.
- Ser amable y claro.
- Utilizar únicamente la información disponible del catálogo.
- No inventar productos, precios ni tallas.
- Tener en cuenta el presupuesto indicado por el cliente.
- Recomendar las prendas que mejor coincidan con la solicitud.
- Solicitar información adicional cuando sea necesario.
- Orientar al cliente sobre el proceso de pedido.

---

## 4. Catálogo utilizado

El catálogo utilizado durante las pruebas fue:

| Producto | Precio | Tallas |
|---|---:|---|
| Camiseta Basic | $35.000 | S, M, L, XL |
| Camiseta Urban | $42.000 | S, M, L, XL |
| Camisa Classic | $58.000 | S, M, L, XL |
| Jean Essential | $95.000 | 28, 30, 32, 34, 36 |
| Pantalón Cargo | $78.000 | 28, 30, 32, 34, 36 |
| Vestido Luna | $85.000 | S, M, L |
| Falda Trend | $55.000 | S, M, L |
| Sudadera Street | $90.000 | S, M, L, XL |
| Chaqueta Urban | $120.000 | S, M, L, XL |
| Buzo Comfort | $75.000 | S, M, L, XL |

---

## 5. Few-Shot Prompting

Se utilizaron ejemplos de conversaciones entre un cliente y el asistente para orientar el comportamiento esperado del modelo.

### Ejemplo

**Cliente:**

> Busco una prenda cómoda para usar todos los días.

**Asistente:**

> Te recomiendo el Buzo Comfort, disponible en tallas S, M, L y XL, con un precio de $75.000.

Otro ejemplo utilizado fue:

**Cliente:**

> ¿Qué opciones tienen para hombre?

**Asistente:**

> Tenemos camisetas, camisas, jeans, pantalones, sudaderas, chaquetas y buzos disponibles en el catálogo.

---

## 6. Pruebas realizadas

### Prueba 1 — Consulta sin catálogo

**Pregunta:**

> Quiero comprar una camiseta para hombre. ¿Qué opciones tienen y qué me recomiendas?

El asistente indicó que no tenía información específica del catálogo y evitó inventar productos o precios.

### Prueba 2 — Consulta con catálogo

**Pregunta:**

> Quiero una camiseta para hombre que cueste menos de $45.000.

El asistente recomendó:

- Camiseta Basic — $35.000.
- Camiseta Urban — $42.000.

La prueba fue satisfactoria porque ambas opciones cumplen con el presupuesto solicitado.

---

## 7. Integración con JavaScript

El asistente fue integrado en la página web mediante JavaScript utilizando una solicitud `fetch()` hacia la API de Gemini.

El usuario escribe su consulta en la página y el sistema envía la pregunta junto con la información del catálogo.

Posteriormente, la respuesta de Gemini se muestra dinámicamente en la sección del asistente.

---

## 8. Seguridad de la API Key

La API Key utilizada para las pruebas no debe publicarse en GitHub ni incluirse directamente en archivos públicos.

En el proyecto se utiliza un campo de la interfaz para introducir la clave durante las pruebas.

---

## 9. Resultado final

La integración permite que Style Shop tenga un asistente virtual capaz de responder preguntas sobre el catálogo y recomendar prendas según las necesidades y presupuesto del cliente.

La prueba final confirmó que la página web puede comunicarse correctamente con Gemini mediante JavaScript.