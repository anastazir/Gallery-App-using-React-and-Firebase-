import React from 'react'
import Images from  '../components/Images'
import { motion } from 'framer-motion'

export default function Gallery() {
    const AnimationSettings = {
        transition: { duration: 0.5 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <motion.div {...AnimationSettings}>
            <section className="flex justify-center">
                <div className="w-5/2" >
                    <div className="text-center">
                        <div className="my-4 text-3xl">Gallery</div>
                        <Images />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
