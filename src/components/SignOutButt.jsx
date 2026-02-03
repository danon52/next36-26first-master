'use client'

import { signOut } from 'next-auth/react'
export default function SignOutButt() {
    return (
        <div>
            <button onClick={() => signOut()}  >Выход</button>
        </div>
    )
}
