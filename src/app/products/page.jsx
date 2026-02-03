import Link from "next/link"

export default async function ProductsPage() {

    const resp = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await resp.json()
    console.log(data)
    return (
        <div>
            <h1>Каталог товаров</h1>
            <div className="grid grid-cols-4 gap-5">
                {data.map(product => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
