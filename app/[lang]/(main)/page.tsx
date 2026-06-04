import HomeHero from '@/components/home/HomeHero'
import { Locale } from '@/i18n.config'

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
      <HomeHero lang={lang} />
    </main>
  )
}