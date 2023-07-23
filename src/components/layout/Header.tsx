import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="navbar bg-base-100 px-24">
                <div className="flex-1">
                    <Link href="#" className="text-3xl font-bold hover:underline">Alnnu</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="#" className="text-xl hover:underline">home</Link></li>
                        <li><Link href="#" className="text-xl hover:underline">sobre</Link></li>
                        <li><Link href="#" className="text-xl hover:underline">portifolio</Link></li>
                        <li><Link href="#" className="text-xl hover:underline">servisos</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}