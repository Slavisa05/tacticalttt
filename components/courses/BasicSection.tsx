import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import Link from "next/link";
import Subheading from "../ui/Subheading";

export default async function PartnersSection({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return(
        <section className="w-full px-[5vw] py-10 overflow-hidden">
            <div className='w-full grid md:grid-cols-2 gap-'>
                <div className='flex flex-col gap-5'>
                    
                </div>
            </div>
        </section>
    )
}