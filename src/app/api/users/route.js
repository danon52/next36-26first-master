import { prisma } from "@/lib/prisma"

export async function DELETE(request) {
    const body = await request.json()


    const deletedUser = await prisma.user.delete({
        where: {
            id: body.id
        }
    })


    if (deletedUser) {
        return Response.json(deletedUser)
    }
    return Response.json({
        status: 'error'
    })
}


export async function POST(request) {
    const body = await request.json()

    const createdUser = await prisma.user.create({
        data: {
            email: body.email,
            fio: body.fio,
            age: Number(body.age),
            password: body.password
        },
        include: {
            posts: true
        }
    })

    console.log(createdUser)

    if (createdUser) {
        return Response.json(createdUser)
    }
}


export async function PUT(request) {
    const body = await request.json()

    const updatedUser = await prisma.user.update({
        where: {
            id: body.id
        },
        data: {
            email: body.email,
            fio: body.fio,
            age: Number(body.age),
            password: body.password
        }
    })

    return Response.json(updatedUser)
}