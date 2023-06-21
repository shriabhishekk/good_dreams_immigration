import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import {AiOutlineRight} from "react-icons/ai";
import taskImage from '../images/taskImage.jpg'

const Resources = () => {
    return (
        <div>
            <motion.div className={'h-72 relative'}
                        initial={{y:-200, opacity: 0}}
                        animate={{y:0, opacity: 1, transition: {duration: 1}}}
            >
                <Image src={taskImage} alt={''} className={'object-cover h-full w-full'}/>
                <div className={'absolute flex flex-col justify-center pl-20 gap-4 text-white top-0 h-full w-full bg-black bg-opacity-[50%]'}>
                    <motion.h1
                        initial={{x:-200, opacity: 0}}
                        animate={{x:0, opacity: 1, transition: {duration: 1.5}}}
                        className={'font-semibold text-5xl'}>About Us</motion.h1>
                    <motion.div
                        initial={{x:-200, opacity: 0}}
                        animate={{x:0, opacity: 1, transition: {duration: 2}}}
                        className={'text-xl flex gap-1 items-center'}>
                        <Link href={'/'} className={'hover:underline'}>Home</Link>
                        <AiOutlineRight className={'mt-2'}/>
                        <Link href={'/resources'} className={'text-gray-400 mt-1 hover:underline'}>Resources</Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Resources;