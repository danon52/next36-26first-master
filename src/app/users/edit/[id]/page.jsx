import { prisma } from "@/lib/prisma";
import UserEditForm from "./UserEditForm";

export default async function EditUserPage({ params }) {
    const { id } = await params

    const user = await prisma.user.findFirst({
        where: {
            id: Number(id)
        }
    })

    return (
        <div>
            <UserEditForm user={user} />
        </div>
    )
}
