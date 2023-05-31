import ImageSwiper from "../components/ImageSwiper";
import OpeningHours from "../components/OpeningHours";
import { barImages, barOpeningHours } from "../data/Bar";
import BarContact from "../components/BarContact";

export default function Bar() {
  return (
    <main>
      <OpeningHours openingHours={barOpeningHours} />
      <ImageSwiper images={barImages} />
      <BarContact />
    </main>
  );
}
