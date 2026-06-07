import { Locale } from '@/i18n.config'
import { Metadata } from 'next';
import { getDictionary } from '@/dictionaries';
import HomeHero from '@/components/home/HomeHero'
import CoursesHome from '@/components/home/CoursesHome';
import HomeAnnouncement from '@/components/home/HomeAnnouncement';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return {
        title: dict.meta.heroTitle,
        description: dict.meta.heroDesc,
    }
}

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