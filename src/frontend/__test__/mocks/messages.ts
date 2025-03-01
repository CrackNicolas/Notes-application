import { HttpStatusCode } from "@/shared/types/response"

type Props = {
    status: HttpStatusCode,
    text: string,
    color: string
}

export const listMessages: Props[] = [
    {
        status: 200,
        text: 'Mensaje de éxito',
        color: 'secondary'
    },
    {
        status: 201,
        text: 'Mensaje de exito',
        color: 'secondary'
    },
    {
        status: 204,
        text: 'Mensaje de éxito',
        color: 'secondary'
    },
    {
        status: 400,
        text: 'Mensaje de error',
        color: 'error'
    },
    {
        status: 401,
        text: 'Mensaje de error',
        color: 'error'
    },
    {
        status: 403,
        text: 'Mensaje de error',
        color: 'error'
    },
    {
        status: 404,
        text: 'Mensaje de error',
        color: 'error'
    },
    {
        status: 500,
        text: 'Mensaje de error',
        color: 'error'
    }
]