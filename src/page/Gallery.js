import React from 'react'
import Images from  '../components/Images'

export default function Gallery() {
    return (
        <section className="flex justify-center">
            <div className="w-5/2" >
                <div className="text-center">
                    <div className="my-4 text-3xl">Gallery</div>
                    <Images />
                </div>
            </div>
        </section>
    )
}
