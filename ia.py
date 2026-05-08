# IA básica para verificar datos históricos coloniales

# Librerías
from transformers import pipeline

# Crear modelo de análisis de texto
analizador = pipeline("text-classification")

# Función principal
def verificar_texto(texto):

    # Palabras históricas clave
    palabras_clave = [
        "colonial",
        "virreinato",
        "Real Audiencia",
        "independencia",
        "Cristóbal Colón",
        "conquista",
        "imperio español"
    ]

    # Buscar coincidencias
    coincidencias = []

    for palabra in palabras_clave:
        if palabra.lower() in texto.lower():
            coincidencias.append(palabra)

    # Resultado
    if len(coincidencias) > 0:

        print("\n✅ Datos históricos detectados")
        print("📚 Coincidencias encontradas:")

        for dato in coincidencias:
            print(f"- {dato}")

    else:

        print("\n❌ No se encontraron referencias históricas coloniales")


# Texto de prueba
texto_usuario = input("Ingrese el texto histórico: ")

# Ejecutar análisis
verificar_texto(texto_usuario)
