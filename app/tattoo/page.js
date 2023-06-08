import ImageSwiper from "../components/ImageSwiper";
import OpeningHours from "../components/OpeningHours";
import { tattooImages, tattooOpeningHours } from "../data/Tattoo";

export default function Tattoo() {
  return (
    <main>
      <OpeningHours openingHours={tattooOpeningHours} />
      <ImageSwiper images={tattooImages} />
    </main>
  );
}
