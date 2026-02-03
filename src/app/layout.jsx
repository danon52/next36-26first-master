import Link from "next/link";
import "./globals.css";
import { getServerSession } from "next-auth";
import { config } from "@/lib/authConfig";

export default async function RootLayout({ children }) {




  const session = await getServerSession(config)
  console.log(session)
  return (
    <html lang="ru">
      <body className="container mx-auto bg-black-600 ">
        <header className="container mx-auto flex justify-between py-5">
          <div className="text-3xl font-bold">LOGO</div>
          <nav className="flex gap-x-4">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/products">Каталог товаров</Link>

            {
              session ?
                (<button>Выход</button>
                ) :
                (<>
                  <Link href="/register">Регистрация </Link>
                  <Link href="/api/auth/signin">Войти </Link>
                </>)
            }
          </nav>
        </header>

        <main>
          {children}
        </main>


        <footer className="mt-10 border-t pt-5 border-t-green-500">
          Подвал. 2026 год
        </footer>

      </body>
    </html>
  );
}
