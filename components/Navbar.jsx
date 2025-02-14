"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Building2, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/properties", label: "Properties" },
    { href: "/neighborhood", label: "Neighborhood" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white shadow-md py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/home" className="flex items-center space-x-2">
                    <Building2 className={cn(
                        "h-8 w-8 transition-colors",
                        isScrolled ? "text-primary" : "text-white"
                    )} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-primary",
                                isScrolled ? "text-gray-600" : "text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        variant="default"
                        className="bg-[#ff5a3c] hover:bg-[#ff4529] text-white"
                    >
                        ES6
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="md:hidden"
                            size="icon"
                        >
                            <Menu className={cn(
                                "h-6 w-6",
                                isScrolled ? "text-primary" : "text-white"
                            )} />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <span className="md:hidden">ES</span>
                    <SheetContent>
                        <div className="flex flex-col space-y-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                variant="default"
                                className="bg-[#ff5a3c] hover:bg-[#ff4529] text-white w-full"
                            >
                                ES6
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}