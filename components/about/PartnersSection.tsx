import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import Link from "next/link";
import Image from "next/image";
import Subheading from "../ui/Subheading";

export default async function PartnersSection({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return(
        <section className="w-full px-[5vw] py-10 overflow-hidden">
            <Subheading text={dict.aboutPage.partnersSubheading} />

            <div className="w-full pt-10 flex flex-wrap md:flex-row items-center justify-between">
                <Link href="https://ghostinternational.com/">
                    <Image
                        src="/ghost-logo.png"
                        alt="ghost international logo"
                        width={150} height={150}
                    />
                </Link>

                <Link href="https://www.erc.edu/">
                    <Image
                        src="/erclogo.png"
                        alt="erc edu logo"
                        width={150} height={150}
                    />
                </Link>

                <Link href="https://www.eurosatory.com/en/">
                    <Image
                        src="/eurosatory.png"
                        alt="eurosatory logo"
                        width={150} height={150}
                    />
                </Link>

                <Link href="https://www.yugoimport.com/">
                    <Image
                        src="/yugoimport.png"
                        alt="yugoimport logo"
                        width={150} height={150}
                    />
                </Link>

                <Link href="https://caagearup.com/">
                    <Image
                        src="/caatactical.png"
                        alt="caa tactical logo"
                        width={150} height={150}
                    />

                </Link>
                <Link href="https://ziroskopi.rs/">
                    <Image
                        src="/ziroskopi.png"
                        alt="teleoptik ziroskopi logo"
                        width={150} height={150}
                    />
                </Link>
            </div>
        </section>
    )
}