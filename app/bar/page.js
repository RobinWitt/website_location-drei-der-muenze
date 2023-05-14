import ImageSwiper from "../components/ImageSwiper";
import OpeningHours from "../components/OpeningHours";
import { barImages, barOpeningHours } from "../data/Bar";

export default function Bar() {
  return (
    <main>
      <OpeningHours openingHours={barOpeningHours} />
      <ImageSwiper images={barImages} />
    </main>
  );
}
