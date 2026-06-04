import Image from "next/image";
import Button from "../ui/Button";

export default function HomeHero() {
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
            <div className="absolute w-full h-full z-10 bg-black/30"></div>

            <div className="md:max-w-[70%] flex flex-col items-center justify-center gap-5">
                <h1 className="text-center">
                    Pripremite se za svaku situaciju sa<br />
                    <span className="uppercase text-green-color font-semibold">Timom za Taktički Trening</span>
                </h1>
                <p className="text-justify">Obuka, trening vatrenim oružjem i taktička oprema na jednom mestu. Osigurajte svoju bezbednost i efikasnost - Pobedite u sukobu!Osigurajte svoju bezbednost i efikasnost - Pobedite u sukobu</p>
            
                <div className="flex items-center justify-between gap-3">
                    <Button text="kontaktirajte nas" />
                    <Button text="pogledajte više" variant="secondary" />
                </div>
            </div>
        </section>
    )
}