import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import Subheading from "../ui/Subheading";

export default async function HomeAnnouncement({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return(
        <section className="w-full px-[5vw] py-10 md:py-14 overflow-hidden">
            <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl">
                <Image 
                    src="/announcement-img.jpg"
                    alt="AK47 M70"
                    width={1200} height={600}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div className="absolute inset-0 z-0 bg-linear-to-b from-black/80 via-black/65 to-black/80" />

                <div className="relative z-10 flex flex-col gap-4 p-5 leading-relaxed md:gap-5 md:p-10">
                    <Subheading text={dict.homeAnnouncement.subheading} />
                    <p>{dict.homeAnnouncement.p1}</p>
                    <p>{dict.homeAnnouncement.p2}</p>
                    <Subheading text={dict.homeAnnouncement.subheading2} />
                    <p>{dict.homeAnnouncement.p3}</p>
                    <p className="font-semibold text-accent">{dict.homeAnnouncement.boldText}</p>
                </div>
            </div>
        </section>
    )
}