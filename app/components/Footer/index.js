import Link from "next/link";
import InstagramLogo from "../Logos/Instagram";

export default function Footer() {
  return (
    <footer>
      <Link href={"/"}>
        <InstagramLogo />
      </Link>
      <div className="container-links">
        <Link href={"/"}>Impressum</Link>
        <Link href={"/"}>Datenschutz</Link>
      </div>
    </footer>
  );
}
