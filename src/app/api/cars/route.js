export function GET() {


    const dataFromDb = [
        {
            id: 1,
            name: 'BNW'
        },
        {
            id: 2,
            name: 'Bentley Maybach X5'
        }
    ]

    return Response.json(dataFromDb)

}


export async function POST(request) {
    const data = await request.json()

    console.log(data)
    return Response.json({
        status: 'success',
        message: `Авто с названием ${data.carName} добавлено в каталог`
    })

}

