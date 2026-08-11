# Proyecto Productivo: Style Shop

> **Integración de Inteligencia Artificial con Google AI Studio y JavaScript**

## Descripción General

Style Shop es una tienda virtual de prendas de vestir desarrollada como proyecto productivo.

El proyecto permite mostrar un catálogo de productos y ofrecer un asistente virtual basado en Inteligencia Artificial para ayudar a los clientes a encontrar prendas de acuerdo con sus necesidades y presupuesto.

El sistema está dirigido a personas interesadas en comprar prendas de vestir de manera sencilla y recibir recomendaciones personalizadas.

## Componente de IA — Google AI Studio

El proyecto utiliza Google AI Studio y Gemini para desarrollar un asistente virtual de atención al cliente.

### Caso de uso

Chatbot inteligente para:

- Consultar productos del catálogo.
- Recomendar prendas.
- Tener en cuenta el presupuesto del cliente.
- Informar sobre tallas disponibles.
- Orientar al cliente sobre el proceso de pedido.

### Modelo utilizado

Gemini 3 Flash Preview.

### Parámetros utilizados

- Temperature: 0.7
- Top-P: 0.9
- Thinking level: configuración predeterminada.

## Catálogo

El catálogo inicial de Style Shop contiene:

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

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Google AI Studio
- Gemini API
- Visual Studio Code
- Live Server

## Estructura del Proyecto

```text
STYLE-SHOP/
│
├── index.html
├── README.md
│
├── css/
│   └── Styles.css
│
├── docs/
│   └── MANUAL_AISTUDIO.md
│
└── js/
    └── app.js