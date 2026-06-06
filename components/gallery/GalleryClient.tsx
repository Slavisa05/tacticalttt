"use client"

import { useEffect, useState } from "react"
import Image from "next/image";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

interface PicturesProps {
    src: string;
    alt: string;
}

const pictures: PicturesProps[] = [
    { src: "/gallery/gallery1.webp", alt: "muškarac ležeći puca iz mitraljeza" },
    { src: "/gallery/gallery2.webp", alt: "muškarac puca iz RPG-a" },
    { src: "/gallery/gallery3.webp", alt: "2 muškarca ležeći pucaju iz snajpera" },
    { src: "/gallery/gallery4.webp", alt: "grupa vojnika ulazi u kamion" },
    { src: "/gallery/gallery5.webp", alt: "snajperista i pomoćnim leže u kamuflažnim odelima" },
    { src: "/gallery/gallery6.webp", alt: "2 muškarca sa puškama iza auta" },
    { src: "/gallery/gallery7.webp", alt: "muškarac nišani puškom" },
    { src: "/gallery/gallery8.webp", alt: "mitraljezi poređani na zemlji" },
    { src: "/gallery/gallery9.png", alt: "specijalci stoje sa strane na helikopteru" },
]

export default function GalleryClient() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    const slides = pictures.map((picture) => ({
        src: picture.src,
        alt: picture.alt,
    }))

    return(
        <section className="relative w-full px-[5vw] pt-80 py-10 min-h-screen overflow-hidden flex items-center justify-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {pictures.map((picture, index) => (
                    <Image 
                        onClick={() => {
                            setCurrentIndex(index);
                            setOpen(true);
                        }}
                        key={picture.src}
                        src={picture.src}
                        alt={picture.alt}
                        width={600} height={400}
                        className="w-full h-full rounded-xl cursor-pointer"
                    />
                ))}

                {mounted && (
                    <Lightbox 
                        open={open}
                        close={() => setOpen(false)}
                        index={currentIndex}
                        slides={slides}
                    />
                )}
            </div>
        </section>
    )
}