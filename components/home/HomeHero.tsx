import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import Image from "next/image";
import Button from "../ui/Button";

export default async function HomeHero({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return(
        <section className="relative w-full px-[5vw] pt-55 min-h-screen overflow-hidden flex items-center justify-center">
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
            <div className="absolute w-full h-full z-1 bg-black/30"></div>

            <div className="relative z-10 md:max-w-[70%] flex flex-col items-center justify-center gap-5">
                <h1 className="text-center">
                    {dict.hero.title}<br />
                    <span className="uppercase text-green-color font-semibold">{dict.hero.titleGreen}</span>
                </h1>
                <p className="text-justify">{dict.hero.desc}</p>
            
                <div className="flex items-center justify-between gap-3">
                    <Button text={dict.hero.mainBtn} />
                    <Button text={dict.hero.secBtn} variant="secondary" />
                </div>
            </div>
        </section>
    )
}