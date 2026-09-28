import SectionHeading from '../components/SectionHeading'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <SectionHeading eyebrow="Photography" title="Gallery" />
      <p className="mt-4 max-w-md text-sm text-stone">A monochrome collection of fan-captured and public moments.</p>
      <div className="mt-12">
        <Gallery />
      </div>
    </div>
  )
}
