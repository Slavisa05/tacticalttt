import { Locale } from '@/i18n.config'
import GalleryClient from '@/components/gallery/GalleryClient';

export default async function Gallery({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return(
    <main>
        <GalleryClient />
    </main>
  )
}