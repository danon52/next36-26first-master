import { prisma } from "@/lib/prisma"
import { editCat } from "@/lib/serverActions"


export default async function EditCatPage({ params }) {
    const { id } = await params
    const cat = await prisma.cat.findFirst({
        where: {
            id: Number(id)
        }
    })

    console.log(cat.dateOfBirth.toISOString()) //2026-01-26
    return (
        <div>
            <form action={editCat}>
                <input name="id" type="text" hidden defaultValue={cat.id} />
                <input defaultValue={cat.poroda} name="poroda" type="text" placeholder="Порода" />
                <input defaultValue={cat.color} name="color" type="text" placeholder="Цвет кота" />
                <input defaultValue={cat.weight} name="weight" type="number" step="0.01" placeholder="Вес" />
                <input defaultValue={cat.dateOfBirth.toISOString().split('T')[0]} name="dateOfBirth" type="date" placeholder="Дата рождения" />
                <button>Добавить в котолог</button>

            </form>
        </div>
    )
}
