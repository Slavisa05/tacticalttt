import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import Image from 'next/image';

export default async function AboutHero({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return(
        <section className="relative w-full px-[5vw] pt-80 py-10 min-h-screen overflow-hidden flex items-center justify-center">
            <div className="w-full grid md:grid-cols-2 gap-10 gap-y-20">
                {/* Prvi red */}
                <div>
                    <Image 
                        src="/kolaz.jpg"
                        alt='kolaž'
                        width={600} height={600}
                        className='w-full h-auto rounded-xl'
                    />        
                </div>

                <div className='w-full flex flex-col justify-center gap-5'>
                    <p dangerouslySetInnerHTML={{ __html: dict.aboutPage.p1}}></p>

                    <ol>
                        <li>{dict.aboutPage.l1}</li>
                        <li>{dict.aboutPage.l2}</li>
                        <li>{dict.aboutPage.l3}</li>
                        <li>{dict.aboutPage.l4}</li>
                    </ol>
                </div>

                {/* Drugi red */}
                <div className='w-full flex flex-col justify-center gap-5'>
                    <p>{dict.aboutPage.p2}</p>
                    <p>{dict.aboutPage.p3}</p>
                </div>

                <div>
                    <Image 
                        src="/about1.jpg"
                        alt='3 mušakrca sa puškama iza auta'
                        width={600} height={600}
                        className='w-full h-auto rounded-xl'
                    />        
                </div>

                {/* Treci red */}
                <div>
                    <Image 
                        src="/about2.jpg"
                        alt='muškarci u vojnoj opremi marširaju u prirodi'
                        width={600} height={600}
                        className='w-full h-auto rounded-xl'
                    />        
                </div>

                <div className='w-full flex flex-col justify-center gap-5'>
                    <p>{dict.aboutPage.p4}</p>
                    <p>{dict.aboutPage.p5}</p>
                </div>
            </div>
        </section>
    )
}