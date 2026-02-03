'use client'

import { useRouter } from "next/navigation"

export default function UserEditForm({ user }) {

    const router = useRouter()

    async function editUser(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        const resp = await fetch('/api/users', {
            method: 'PUT',
            body: JSON.stringify({
                id: user.id,
                email: formData.get('email'),
                fio: formData.get("fio"),
                age: formData.get("age"),
                password: formData.get("password"),
            })
        })
        const result = await resp.json()

        if (resp.ok) {
            router.push('/users')
        }

    }


    return (
        <div>
            <form onSubmit={(e) => editUser(e)}>
                <input defaultValue={user.fio} type="text" name="fio" placeholder="Имя" />
                <input defaultValue={user.age} type="text" name="age" placeholder="Возраст" />
                <input defaultValue={user.email} type="text" name="email" placeholder="Email" />
                <input defaultValue={user.password} type="text" name="password" placeholder="Password" />
                <button>Сохранить</button>
            </form>
        </div>
    )
}
