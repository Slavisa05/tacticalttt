import { Locale } from '@/i18n.config'
import { Metadata } from 'next';
import { getDictionary } from '@/dictionaries';
import GalleryClient from '@/components/gallery/GalleryClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return {
        title: dict.meta.galleryTitle,
        description: dict.meta.galleryDesc,
    }
}

export default async function Gallery({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <GalleryClient />
    </main>
  )
}