import { Locale } from '@/i18n.config'
import { Metadata } from 'next';
import { getDictionary } from '@/dictionaries';
import CoursesHero from '@/components/courses/CoursesHero';
import CourseSection from '@/components/courses/CourseSection';
import OtherCourses from '@/components/courses/OtherCourses';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return {
        title: dict.meta.coursesTitle,
        description: dict.meta.coursesDesc,
    }
}

export default async function COntact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <CoursesHero lang={lang} />
        <CourseSection lang={lang} />
        <OtherCourses lang={lang} />
    </main>
  )
}