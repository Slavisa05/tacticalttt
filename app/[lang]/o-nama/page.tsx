import { Locale } from '@/i18n.config'
import AboutHero from '@/components/about/AboutHero';
import PartnersSection from '@/components/about/PartnersSection';

export default async function About({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <AboutHero lang={lang} />
        <PartnersSection lang={lang} />
    </main>
  )
}