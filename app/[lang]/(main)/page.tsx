import { Locale } from '@/i18n.config'
import HomeHero from '@/components/home/HomeHero'
import CoursesHome from '@/components/home/CoursesHome';
import HomeAnnouncement from '@/components/home/HomeAnnouncement';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
      <HomeHero lang={lang} />
      <CoursesHome lang={lang} />
      <HomeAnnouncement lang={lang} />
    </main>
  )
}