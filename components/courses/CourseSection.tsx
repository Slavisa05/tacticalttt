import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'
import Link from "next/link";
import Button from '../ui/Button';
import CourseTabs from './CourseTabs';

type CourseCategory = "basic" | "advanced" | "special" | "medical";

const COURSE_CATEGORIES: CourseCategory[] = ["basic", "advanced", "special", "medical"];

function getCategoryItems(coursesPage: Record<string, string>, category: CourseCategory): string[] {
    const pattern = new RegExp(`^${category}(\\d+)$`);

    return Object.entries(coursesPage)
        .map(([key, value]) => {
            const match = key.match(pattern);

            if (!match) {
                return null;
            }

            return {
                index: Number(match[1]),
                value,
            };
        })
        .filter((item): item is { index: number; value: string } => item !== null)
        .sort((a, b) => a.index - b.index)
        .map((item) => item.value);
}

export default async function CourseSection({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    const coursesPage = dict.coursesPage as Record<string, string>;

    return(
        <section className="w-full px-[5vw] py-10 space-y-25">
            {COURSE_CATEGORIES.map((category) => {
                const heading = coursesPage[`${category}Heading`];
                const items = getCategoryItems(coursesPage, category);

                if (!heading || items.length === 0) {
                    return null;
                }

                return (
                    <div key={category} className='relative w-full grid md:grid-cols-2 gap-8 items-start'>
                        <div className='md:sticky md:top-15 flex flex-col gap-5'>
                            <h2 className='capitalize'>{heading}</h2>
                            <ol className='list-decimal pl-6 space-y-2'>
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>

                            <div>
                                <Link href="/kontakt">
                                    <Button text={dict.coursesPage.button} />
                                </Link>
                            </div>
                        </div>

                        <CourseTabs lang={lang} category={category} />
                    </div>
                );
            })}
        </section>
    )
}