import React, { useEffect, useState, useRef } from "react"
import "./slide.css"
import { motion } from "framer-motion"
import almaviva from "../../assets/clients/almaviva.jpg"
import almawave from "../../assets/clients/almawave.jpg"
import ambev from "../../assets/clients/ambev.jpg"
import awr from "../../assets/clients/arw.jpg"
import lbs from "../../assets/clients/lbs.jpg"

const images = [almaviva, almawave, ambev, awr, lbs]
const Slide = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)



    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

    return (

        <>
            <div className="slide">
                <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
                    <motion.div
                    className="inner"
                    drag="x"
                    dragConstraints={{right: 0, left:-width}}
                    initial={{x: 0}} animate={{x: -width}}
                    transition={{ duration: 5, repeat: Infinity }}
                    >

                        {images.map(image => (
                            <motion.div className="item" key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

        </>
    )
}

export default Slide