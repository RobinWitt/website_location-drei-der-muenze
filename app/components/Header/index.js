import DreiDerMuenzeLogo from "../Logos/DreiDerMuenzeHeader";
import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href={"/"}>
        <h1>
          <DreiDerMuenzeLogo />
        </h1>
      </Link>
    </header>
  );
}
