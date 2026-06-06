import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import Image from 'next/image';

export default async function CoursesHero({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return(
        <section className="relative w-full px-[5vw] pt-80 md:pt-55 min-h-screen overflow-hidden flex items-center justify-center">
            {/* BG slika */}
            <Image 
                src="/hero-slika.jpg"
                alt="hero slika"
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 -z-10 object-cover object-top"
            />

            {/* dark ovarlay */}
            <div className="absolute -mt-55 w-full h-full z-1 bg-black/30"></div>

            <div className="relative z-10 w-full md:max-w-[70%] flex flex-col items-center justify-center gap-5">
                <h1 className="text-center w-full">{dict.coursesPage.heading}</h1>
                <p className="text-justify">{dict.coursesPage.p}</p>
            </div>
        </section>
    )
}