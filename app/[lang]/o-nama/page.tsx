import { Locale } from '@/i18n.config'
import { Metadata } from 'next';
import { getDictionary } from '@/dictionaries';
import AboutHero from '@/components/about/AboutHero';
import PartnersSection from '@/components/about/PartnersSection';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return {
        title: dict.meta.coursesTitle,
        description: dict.meta.coursesDesc,
    }
}

export default async function About({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <AboutHero lang={lang} />
        <PartnersSection lang={lang} />
    </main>
  )
}