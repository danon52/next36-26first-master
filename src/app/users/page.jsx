import UsersCards from "@/components/UsersCards"
import { prisma } from "@/lib/prisma"

export default async function UsersPage() {

    const data = await prisma.user.findMany({
        include: {
            posts: true
        }
    })
    console.log(data)
    return (
        <div>
            <UsersCards data={data} />
        </div>

    )
}
