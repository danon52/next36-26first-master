'use client'

import Link from "next/link"
import { useState } from "react"

export default function UsersCards({ data }) {
    const [users, setUsers] = useState(data)

    async function deleteUser(id) {
        const resp = await fetch('/api/users', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            })
        })
        const result = await resp.json()

        if (result.id) {
            setUsers(
                users.filter(user => user.id !== result.id)
            )
        } else {
            console.log('Ошибка удаления')
        }

        console.log(result)
    }

    const [show, setShow] = useState(false)


    async function addUser(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        const resp = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                fio: formData.get("fio"),
                age: formData.get("age"),
                password: formData.get("password"),
            })
        })


        const result = await resp.json()

        setUsers(
            [
                ...users,
                result
            ]
        )

        console.log(result)
    }

    return (
        <div>

            <div className="flex justify-end mb-5">
                <button onClick={() => setShow(true)} className="px-4 py-2 bg-green-600 text-white">Создать пользователя</button>
            </div>
            <div>
                {
                    show && (
                        <form onSubmit={(e) => addUser(e)} className="w-125 mx-auto flex flex-col gap-y-3">
                            <input name="email" className="py-1 px-2 border-b-2 border-b-gray-500" type="email" placeholder="Введите E-mail" />
                            <input name="fio" className="py-1 px-2 border-b-2 border-b-gray-500" type="text" placeholder="Введите ФИО" />
                            <input name="age" className="py-1 px-2 border-b-2 border-b-gray-500" type="number" placeholder="Введите возраст" />
                            <input name="password" className="py-1 px-2 border-b-2 border-b-gray-500" type="text" placeholder="Введите пароль" />
                            <div className="flex gap-x-3 justify-center">
                                <button className=" cursor-pointer py-1 px-2 border-2 border-green-500">Создать</button>
                                <button onClick={() => setShow(false)} className=" cursor-pointer py-1 px-2 border-2 border-red-500" type="button">Отмена</button>
                            </div>

                        </form>
                    )
                }

            </div>
            <div className="grid grid-cols-5 gap-5">

                {
                    users.map(user => (
                        <div className="bg-gray-500 p-5 rounded-lg text-white shadow-lg" key={user.id}>
                            <p> {user.id} | {user.email}</p>
                            <p>{user.fio}</p>
                            <p>{user.age} лет</p>
                            <p>Написал {user.posts.length} постов</p>
                            <div className="flex justify-evenly mt-4">
                                <Link href={`/users/edit/${user.id}`}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className=" py-1 px-2 bg-red-500">Delete</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
