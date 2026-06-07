import { getDictionary } from "@/dictionaries"
import { Locale } from "@/i18n.config";
import Link from "next/link";
import Button from "../ui/Button";

export default async function OtherCourses({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return(
        <section className="w-full px-[5vw] py-10">
            <div className="w-full grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                    <h2>{dict.coursesPage.individualHeading}</h2>

                    <ul>
                        <li>{dict.coursesPage.individual1}</li>
                        <li>{dict.coursesPage.individual2}</li>
                        <li>{dict.coursesPage.individual3}</li>
                        <li>{dict.coursesPage.individual4}</li>
                    </ul>

                    <Link href="/kontakt">
                        <Button text={dict.coursesPage.button} />
                    </Link>
                </div>

                <div className="flex flex-col gap-5">
                    <h2>{dict.coursesPage.militaryHeading}</h2>

                    <div className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-4">
                        <p className="relative z-10 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                            {dict.coursesPage.restrictive}
                        </p>
                        <p className="relative z-10 mt-2 text-sm leading-relaxed text-red-50/85">
                            {dict.coursesPage.restrictiveDesc}
                        </p>
                    </div>

                    <ul>
                        <li>{dict.coursesPage.military1}</li>
                        <li>{dict.coursesPage.military2}</li>
                        <li>{dict.coursesPage.military3}</li>
                        <li>{dict.coursesPage.military4}</li>
                        <li>{dict.coursesPage.military5}</li>
                        <li>{dict.coursesPage.military6}</li>
                        <li>{dict.coursesPage.military7}</li>
                        <li>{dict.coursesPage.military8}</li>
                        <li>{dict.coursesPage.military9}</li>
                        <li>{dict.coursesPage.military10}</li>
                        <li>{dict.coursesPage.military11}</li>
                        <li>{dict.coursesPage.military12}</li>
                        <li>{dict.coursesPage.military13}</li>
                        <li>{dict.coursesPage.military14}</li>
                        <li>{dict.coursesPage.military15}</li>
                        <li>{dict.coursesPage.military16}</li>
                        <li>{dict.coursesPage.military17}</li>
                        <li>{dict.coursesPage.military18}</li>
                        <li>{dict.coursesPage.military19}</li>
                        <li>{dict.coursesPage.military20}</li>
                    </ul>

                    <Link href="/kontakt">
                        <Button text={dict.coursesPage.button} />
                    </Link>
                </div>
            </div>
        </section>
    )
}