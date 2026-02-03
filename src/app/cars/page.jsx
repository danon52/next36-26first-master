'use client'

import { useEffect, useState } from "react"

export default function CarsPage() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        async function getCars() {
            const resp = await fetch('/api/cars')
            const data = await resp.json()
            console.log(data)
            setCars(data)
        }
        getCars()
    }, [])


    const [name, setName] = useState('')

    async function createCar(e) {
        e.preventDefault()
        const resp = await fetch('/api/cars', {
            method: 'post',
            body: JSON.stringify({
                carName: name
            })
        })
        const data = await resp.json()
        console.log(data)
    }

    return (
        <div>
            {
                cars.map(car => (
                    <p key={car.id}>{car.name}</p>
                ))
            }


            <form onSubmit={(e) => createCar(e)}>
                <input value={name} onInput={(e) => setName(e.target.value)} type="text" placeholder="Введите название машины" />
                <button>Создать</button>
            </form>

        </div>
    )
}
