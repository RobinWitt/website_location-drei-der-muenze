import Link from "next/link";
import InstagramLogo from "../Logos/Instagram";
import TelegramLogo from "../Logos/Telegram";

export default function Footer() {
  return (
    <footer>
      <div className="container-links">
        <Link href={"/"}>
          <InstagramLogo />
        </Link>
        <Link href={"/"}>
          <TelegramLogo />
        </Link>
      </div>
      <div className="container-links">
        <Link href={"/"}>Impressum</Link>
        <Link href={"/"}>Datenschutz</Link>
      </div>
    </footer>
  );
}
