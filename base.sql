-- Crear base de datos
CREATE DATABASE ia_historia_colonial;

-- Usar la base de datos
USE ia_historia_colonial;

-- Crear tabla principal
CREATE TABLE eventos_historicos (

    id INT PRIMARY KEY AUTO_INCREMENT,

    evento VARCHAR(200) NOT NULL,

    fecha INT NOT NULL,

    categoria VARCHAR(100),

    descripcion TEXT

);

-- Insertar datos históricos

INSERT INTO eventos_historicos
(evento, fecha, categoria, descripcion)

VALUES

(
    'Llegada de Cristóbal Colón a América',
    1492,
    'Colonización',
    'Inicio del proceso de conquista y colonización española.'
),

(
    'Creación del Virreinato del Perú',
    1542,
    'Virreinato',
    'Organización política del Imperio Español en Sudamérica.'
),

(
    'Real Audiencia de Quito',
    1563,
    'Administración Colonial',
    'Institución política y judicial de la colonia.'
),

(
    'Independencia de Ecuador',
    1822,
    'Independencia',
    'Fin del dominio colonial español en el territorio ecuatoriano.'
);

-- Consultar información
SELECT * FROM eventos_historicos;
