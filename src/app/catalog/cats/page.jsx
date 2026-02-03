import { prisma } from "@/lib/prisma"
import { createCat } from "@/lib/serverActions"
import DeleteButton from "./DeleteButton"
import Link from "next/link"

export default async function CatalogCatsPage() {

    const cats = await prisma.cat.findMany({
        include: {
            photos: true
        }
    })

    return (
        <div>

            <form action={createCat}>
                <input name="poroda" type="text" placeholder="Порода" />
                <input name="color" type="text" placeholder="Цвет кота" />
                <input name="weight" type="number" step="0.01" placeholder="Вес" />
                <input name="dateOfBirth" type="date" placeholder="Дата рождения" />
                <input multiple name="image" type="file" />
                <button>Добавить в котолог</button>
            </form>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>фото</th>
                        <th>Порода</th>
                        <th>Цвет</th>
                        <th>Вес</th>
                        <th>Дата рождения</th>
                        <th>Действия</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        cats.map(cat => (
                            <tr key={cat.id}>
                                <td>{cat.id}</td>
                                <td>

                                    {cat.photos.map(img => (
                                        <div key={img.id}>
                                            <img className="w-30" src={img.url} alt="" />
                                        </div>
                                    ))
                                    }
                                </td>

                                <td>{cat.poroda}</td>
                                <td>{cat.color}</td>
                                <td>{cat.weight}</td>
                                <td>{cat.dateOfBirth.toLocaleDateString('ru-RU', { month: 'long', day: '2-digit', year: '2-digit' })}</td>
                                <td>
                                    <DeleteButton id={cat.id} />
                                    <Link href={`/catalog/cats/edit/${cat.id}`}>Редактировать</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    )
}
