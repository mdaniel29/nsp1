"use client"

import Link from "next/link";
import { useState } from "react";


const Navbar: React.FC = () => {

    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    return (
        <nav className="bg-green-950/60 text-white">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-lg font-bold">Deezer Clone</div>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/albums" className="hover:text-gray-300">
                            Albums
                        </Link>
                    </li>
                    {isAdmin && (
                        <li>
                            <Link href="/dashboard" className="hover:text-gray-300">
                                Dashboard
                            </Link>
                        </li>
                    )}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
