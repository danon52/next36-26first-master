'use client'

import { deleteCat } from "@/lib/serverActions"

export default function DeleteButton({ id }) {
    return (
        <button onClick={() => deleteCat(id)}>Удалить</button>
    )
}
