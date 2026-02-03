import { prisma } from "@/lib/prisma"
import { registerUser } from "@/lib/serverActions"


export default async function RegisterPage() {




    return (
        <div>
            <form action={registerUser} className="max-w-125 flex flex-col gap-y-3">
                <input placeholder="ФИО" className="px-4 py-2 border border-amber-600" type="text" name="fio" id="" />
                <input placeholder="Возраст" className="px-4 py-2 border border-amber-600" type="number" name="age" id="" />
                <input placeholder="Email" className="px-4 py-2 border border-amber-600" type="email" name="email" id="" />
                <input placeholder="Пароль " className="px-4 py-2 border border-amber-600" type="password" name="password" id="" />
                <button>Зарегистрироваться </button>
            </form>
        </div>
    )
}
