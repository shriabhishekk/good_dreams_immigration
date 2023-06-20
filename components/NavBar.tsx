import React, {useEffect, useRef, useState} from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";
import logoImage from '../images/logo.png'

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isJobsOpen, setIsJobsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`fixed w-full bg-white z-10 px-2 md:px-12 flex justify-between h-18 duration-700 transition-all w-full ${
                hasScrolled ? 'shadow-xl' : ''
            } ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100 sticky top-0'}`}
        >
            <div className="flex w-full h-full justify-between">
                <div className="flex items-center text-2xl cursor-pointer">
                    <Link href="/" className={'w-40 md:w-44'}>
                        <Image src={logoImage} alt={''} className={'h-full'}/>
                    </Link>
                </div>
                <ul className="hidden md:flex gap-8 font-bold text-gray-600 text-lg">
                    <Link href={'/'} className="relative cursor-pointer hover:text-gray-800 duration-300 transition-all transition-all flex items-center">
                        <span>Home</span>
                    </Link>
                    <Link href={'/services'} className="relative cursor-pointer hover:text-gray-800 duration-300 transition-all transition-all flex items-center">
                        <span>Services</span>
                    </Link>
                    <Link href={'/about'} className="relative cursor-pointer hover:text-gray-800 duration-300 transition-all transition-all flex items-center">
                        <span>About Us</span>
                    </Link>
                    <Link href={'resources'} className="relative cursor-pointer hover:text-gray-800 duration-300 transition-all transition-all flex items-center">
                        <span>Resources</span>
                    </Link>
                    <Link href={'contact'} className="relative cursor-pointer hover:text-gray-800 duration-300 transition-all transition-all flex items-center">
                        <span>Contact Us</span>
                    </Link>
                </ul>
            </div>
            <div className="md:hidden flex items-center">
                <div className="h-10 w-10 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={handleMobileMenuToggle}>
                    {isMobileMenuOpen ? (
                        <FiX size={30} className="text-gray-800" />
                    ) : (
                        <FiMenu size={30} className="text-gray-800" />
                    )}
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul className="pt-10 w-full bg-white text-4xl italic absolute top-16 left-0 w-full h-screen shadow-lg flex flex-col items-center">
                    <Link href={'/'} className="relative cursor-pointer transition-all flex items-center">
                        <span>Home</span>
                    </Link>
                    <Link href={'/services'} className="relative cursor-pointer transition-all flex items-center">
                        <span>Services</span>
                    </Link>
                    <Link href={'/about'} className="relative cursor-pointer transition-all flex items-center">
                        <span>About Us</span>
                    </Link>
                    <Link href={'resources'} className="relative cursor-pointer transition-all flex items-center">
                        <span>Resources</span>
                    </Link>
                    <Link href={'contact'} className="relative cursor-pointer transition-all flex items-center">
                        <span>Contact Us</span>
                    </Link>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
