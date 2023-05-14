import ImageSwiper from "../components/ImageSwiper";
import OpeningHours from "../components/OpeningHours";
import { cafeImages, cafeOpeningHours } from "../data/Cafe";

export default function Cafe() {
  return (
    <main>
      <OpeningHours openingHours={cafeOpeningHours} />
      <ImageSwiper images={cafeImages} />
    </main>
  );
}
