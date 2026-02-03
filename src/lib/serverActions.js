'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { redirect } from "next/navigation"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"
import { url } from "node:inspector"
import { hash } from "bcrypt"



export async function createCat(formData) {


    const images = formData.getAll('image')
    const imagesNames = []


    for (const img of images) {
        const buffer = Buffer.from(await img.arrayBuffer())

        const imagename = Date.now() + img.name

        await writeFile(
            join('public', imagename),
            buffer
        )
        imagesNames.push({
            url: `/${imagename}`
        })
    }
    const cat = await prisma.cat.create({
        data: {
            color: formData.get('color'),
            poroda: formData.get('poroda'),
            weight: parseFloat(formData.get('weight')),
            dateOfBirth: new Date(formData.get('dateOfBirth')),
            photos: {
                createMany: {
                    data: imagesNames
                }
            }
        }
    })
    revalidatePath('/catalog/cats')
}



export async function deleteCat(id) {
    const cat = await prisma.cat.delete({
        where: {
            id: Number(id)
        }
    })

    revalidatePath('/catalog/cats')
}


export async function editCat(formData) {
    const cat = await prisma.cat.update({
        data: {
            color: formData.get('color'),
            poroda: formData.get('poroda'),
            weight: parseFloat(formData.get('weight')),
            dateOfBirth: new Date(formData.get('dateOfBirth'))
        },
        where: {
            id: Number(formData.get('id'))
        }
    })

    redirect('/catalog/cats')
}


export async function registerUser(FormData) {
    const user = await prisma.user.create({
        data: {
            fio: FormData.get('fio'),
            email: FormData.get('email'),
            age: Number(FormData.get('age')),
            password: await hash(FormData.get('password'), 10)
        }
    })
    if (user) {
        redirect('/api/auth/signin')
    }
}