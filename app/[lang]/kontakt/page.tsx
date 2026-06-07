import { Locale } from '@/i18n.config'
import { Metadata } from 'next';
import { getDictionary } from '@/dictionaries';
import ContactClient from '@/components/Contact/ContactClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return {
        title: dict.meta.contactTitle,
        description: dict.meta.contactDesc,
    }
}

export default async function COntact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <ContactClient lang={lang} />
    </main>
  )
}