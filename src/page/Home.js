import React from 'react'
import { motion } from "framer-motion"

export default function Home() {
    return (
        <div className="flex h-screen">
                <motion.h1 initial={{opacity:0,y:-400}} animate={{ scale: 1.5,opacity:1,y:0,transition:{duration:1},rotate:720 }} className="m-auto text-3xl">Home</motion.h1>
        </div>
    )
}
