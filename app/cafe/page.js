import ImageSwiper from "../components/ImageSwiper";
import OpeningHours from "../components/OpeningHours";
import { cafeImages, openingHours } from "../data/Cafe";

export default function Cafe() {
  return (
    <main>
      <OpeningHours openingHours={openingHours} />
      <ImageSwiper images={cafeImages} />
    </main>
  );
}
