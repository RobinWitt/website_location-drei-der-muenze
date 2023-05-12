import "./landingPageGrid.css";
import LandingPageGridTile from "../LandingPageGridTile";
import { LandingPageContent } from "@/app/data/LandingPage";

export default function LandingPageGrid() {
  return (
    <div className="landing-page_grid">
      {LandingPageContent.map(({ title, src, href }) => {
        return (
          <LandingPageGridTile
            key="title"
            title={title}
            src={src}
            href={href}
          />
        );
      })}
    </div>
  );
}
