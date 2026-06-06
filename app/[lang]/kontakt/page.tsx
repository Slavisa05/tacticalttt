import { Locale } from '@/i18n.config'
import ContactClient from '@/components/Contact/ContactClient';

export default async function COntact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <ContactClient lang={lang} />
    </main>
  )
}