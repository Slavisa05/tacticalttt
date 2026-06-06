import { Locale } from '@/i18n.config'

export default async function COntact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>

    </main>
  )
}