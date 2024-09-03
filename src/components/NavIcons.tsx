"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./CartModal"
import { Bell, CircleUserRound, ShoppingCart } from "lucide-react"

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();

    //TEMPORARIO
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push('/login');
        }

        setIsProfileOpen((prev) => !prev);
    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <CircleUserRound
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={handleProfile}
            />
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/">Perfil</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>
            )}
            <Bell
                width={24}
                height={24}
                className="cursor-pointer"
            />
            <div className="relative cursor-pointer">
                <ShoppingCart
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    onClick={() => setIsCartOpen((prev) => !prev)}
                />
                    <div className="absolute -top-4 -right-4 w-6 h-6 bg-nueveonce rounded-full text-white text-sm flex items-center justify-center">2</div>
            </div>

            {isCartOpen && <CartModal/>}
        </div>
    );
}

export default NavIcons
