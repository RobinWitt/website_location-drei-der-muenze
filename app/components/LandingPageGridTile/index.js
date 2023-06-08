import "./landingPageGridTile.css";
import Image from "next/image";
import Link from "next/link";
import { neuton } from "@/app/layout";

export default function LandingPageGridTile({ title, src, href }) {
  return (
    <div className="grid_tile">
      <Link className="grid_link" href={href}>
        <h2 className={`grid_heading ${neuton.className}`}>{title}</h2>
        <Image
          className="grid_image"
          src={src}
          alt={title}
          width={600}
          height={600}
        />
      </Link>
    </div>
  );
}
