import "./footer.css";
import Link from "next/link";
import InstagramLogo from "../Logos/Instagram";
import TelegramLogo from "../Logos/Telegram";

export default function Footer() {
  return (
    <footer>
      <div className="container-links">
        <Link href={"https://www.instagram.com/dreidermuenze/"} target="blank">
          <InstagramLogo />
        </Link>
        <Link href={"https://t.me/dreidermuenze"} target="blank">
          <TelegramLogo />
        </Link>
      </div>
      <div className="container-links">
        <Link href={"/impressum"}>Impressum</Link>
        <Link href={"/datenschutz"}>Datenschutz</Link>
      </div>
    </footer>
  );
}
