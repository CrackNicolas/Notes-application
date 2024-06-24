import { Props_items_dashboard } from "@/frontend/types/props"

export const items_main: Props_items_dashboard[] = [
    {
        url: '/sessions',
        title: 'Administra sesiones de usuario',
        description: 'Revisa sesiones activas y cerradas en tu aplicacion de notas de forma facil.'
    },
    {
        url: '/notes',
        title: 'Crear nota',
        description: 'Escribe y guarda tus ideas o recordatorios importantes. Mantén tus notas organizadas.'
    },
    {
        url: '/dashboard/config',
        title: 'Configuracion de notas',
        description: 'Configura tus notas para mejorar tu experiencia personalizando diversos aspectos.'
    },
    {
        url: '/notes/search',
        title: 'Lista de notas',
        description: 'Encuentra rápidamente tus notas con esta funcion y mejora tu productividad en un instante.'
    }
]
export const items_config = [
    {
        url: '/notes/category',
        title: 'Administracion de categorias',
        description: 'Realiza la creacion, edicion, eliminacion y visualizacion de categorias con facilidad.'
    }
]