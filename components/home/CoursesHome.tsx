import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import Button from '../ui/Button'
import Subheading from '../ui/Subheading';
import HomeHouseCard from './HomeCourseCard';

export default async function CoursesHome({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    
    return(
        <section className="w-full px-[5vw] py-10 overflow-hidden flex items-center justify-center">
            <div className='w-full flex flex-col gap-5'>
                <Subheading text={dict.homeCourses.subheading} />
                <h2 className='md:max-w-[70%] mb-10'>{dict.homeCourses.heading}</h2>

                <div className='w-full grid md:grid-cols-3 gap-5'>
                    <HomeHouseCard heading={dict.homeCourses.basicHeading} desc={dict.homeCourses.basicDesc} />
                    <HomeHouseCard heading={dict.homeCourses.advancedHeading} desc={dict.homeCourses.advancedDesc} />
                    <HomeHouseCard heading={dict.homeCourses.specialHeading} desc={dict.homeCourses.specialDesc} />
                    <HomeHouseCard heading={dict.homeCourses.medicalHeading} desc={dict.homeCourses.medicalDesc} />
                    <HomeHouseCard heading={dict.homeCourses.individualHeading} desc={dict.homeCourses.individualDesc} />
                    <HomeHouseCard heading={dict.homeCourses.technicalHeading} desc={dict.homeCourses.technicalDesc} />
                    <HomeHouseCard heading={dict.homeCourses.militaryHeading} desc={dict.homeCourses.militaryDesc} />
                </div>
            </div>
        </section>
    )
}