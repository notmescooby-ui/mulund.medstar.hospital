import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import firstFloorGallery from "@/assets/first-floor-gallery.png";
import doctorsLoungeGallery from "@/assets/doctors-lounge-gallery.png";
import deluxeGallery from "@/assets/deluxe-gallery.png";
import dadGallery from "@/assets/dad-gallery.png";
import accountsGallery from "@/assets/accounts-gallery.png";
import generalWardGallery from "@/assets/general-ward-gallery.png";
import icu2Gallery from "@/assets/icu2-gallery.png";
import icuGallery from "@/assets/icu-gallery.png";
import icu4Gallery from "@/assets/icu4-gallery.png";
import icu3Gallery from "@/assets/icu3-gallery.png";
import icu5Gallery from "@/assets/icu5-gallery.png";
import minor2OtGallery from "@/assets/minor2-ot-gallery.png";
import minorOtGallery from "@/assets/minor-ot-gallery.png";
import majorOtGallery from "@/assets/major-ot-gallery.png";
import name2Gallery from "@/assets/name2-gallery.png";
import nameGallery from "@/assets/name-gallery.png";
import uncleGallery from "@/assets/uncle-gallery.png";
import uncleDadGallery from "@/assets/uncle-dad-gallery.png";
import twinBed2Gallery from "@/assets/twin-bed2-gallery.png";
import twinBedGallery from "@/assets/twin-bed-gallery.png";
import specialTwinGallery from "@/assets/special-twin-gallery.png";
import secondFloorGallery from "@/assets/second-floor-gallery.png";
import recoveryRoomGallery from "@/assets/recovery-room-gallery.png";
import receptionGallery from "@/assets/reception-gallery.png";
import opdGallery from "@/assets/opd-gallery.png";

const images = [
  { src: firstFloorGallery, alt: "First floor gallery" },
  { src: doctorsLoungeGallery, alt: "Doctors lounge gallery" },
  { src: deluxeGallery, alt: "Deluxe room gallery" },
  { src: dadGallery, alt: "Dad gallery" },
  { src: accountsGallery, alt: "Accounts gallery" },
  { src: generalWardGallery, alt: "General ward gallery" },
  { src: icu2Gallery, alt: "ICU 2 gallery" },
  { src: icuGallery, alt: "ICU gallery" },
  { src: icu4Gallery, alt: "ICU 4 gallery" },
  { src: icu3Gallery, alt: "ICU 3 gallery" },
  { src: icu5Gallery, alt: "ICU 5 gallery" },
  { src: minor2OtGallery, alt: "Minor OT 2 gallery" },
  { src: minorOtGallery, alt: "Minor OT gallery" },
  { src: majorOtGallery, alt: "Major OT gallery" },
  { src: name2Gallery, alt: "Name 2 gallery" },
  { src: nameGallery, alt: "Name gallery" },
  { src: uncleGallery, alt: "Uncle gallery" },
  { src: uncleDadGallery, alt: "Uncle dad gallery" },
  { src: twinBed2Gallery, alt: "Twin bed 2 gallery" },
  { src: twinBedGallery, alt: "Twin bed gallery" },
  { src: specialTwinGallery, alt: "Special twin gallery" },
  { src: secondFloorGallery, alt: "Second floor gallery" },
  { src: recoveryRoomGallery, alt: "Recovery room gallery" },
  { src: receptionGallery, alt: "Reception gallery" },
  { src: opdGallery, alt: "OPD gallery" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Medstar Multispeciality Hospital and ICU" },
      { name: "description", content: "Explore Medstar Hospital's gallery showcasing our ICU, patient rooms, facilities and modern healthcare environment in Mulund West." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <Reveal className="max-w-3xl space-y-6 mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Gallery</span>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Hospital Gallery</h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Discover Medstar Multispeciality Hospital's facilities, ICU care areas, patient rooms, clinical spaces, and support infrastructure. Our gallery reflects a clean, modern healthcare environment designed for comfort and medical excellence.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((item) => (
            <div key={item.alt} className="break-inside-avoid overflow-hidden rounded-3xl shadow-soft bg-white">
              <img src={item.src} alt={item.alt} loading="lazy" className="block max-w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
