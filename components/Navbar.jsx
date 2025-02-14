import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <span className="flex items-center justify-center">
                    <h3>Logo</h3>
                </span>
            </Link>


            <ul>
                <li>
                    <Link href="/home">Home</Link>
                </li>

                <li>
                    <Link href="/about">About</Link>
                </li>

                <li>
                    <Link href="/properties">Properties</Link>
                </li>

                <li>
                    <Link href="/neighborhood">Neighborhood</Link>
                </li>

                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>

                <li>
                    <Link href="/contact">Contact</Link>
                </li>

                <li>
                    <Link
                        href="#"
                        className="btn shadow-lg hover:shadow-blue-400 transition duration-300 flex justify-center items-center gap-1"
                    >ES6 <span className="text-[#e7272d]"><FaAngleDown /></span></Link>
                </li>
            </ul>

        </nav>
    );
}