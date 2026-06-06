import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import ContactForm from './ContactForm';
import Subheading from "../ui/Subheading"

export default async function ContactClient({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
  
    return(
        <section className="w-full min-h-screen px-[5vw] pt-75 md:pt-85 pb-10 flex flex-col items-center justify-center gap-15">
            <div className="w-full grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center gap-8">
                    <Subheading text={dict.contactPage.subheading} />
                    <h1>{dict.contactPage.heading}</h1>
                    <p>{dict.contactPage.p}</p>
                </div>

                <div className="w-full">
                    <ContactForm contactPage={dict.contactPage} />
                </div>
            </div>
        </section>
    )
}