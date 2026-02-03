export default async function SignleProductPage({ params }) {

    const param = await params

    const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${param.id}`)
    const data = await resp.json()


    return (
        <div>

            Карточка товара - {param.id}

            <p>{data.title}</p>
            <p>{data.price}</p>



        </div>
    )
}
