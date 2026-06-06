import { Locale } from '@/i18n.config'
import CoursesHero from '@/components/courses/CoursesHero';

export default async function COntact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <CoursesHero lang={lang} />
    </main>
  )
}