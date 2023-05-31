import DreiDerMuenzeLogo from "../Logos/DreiDerMuenzeHeader";
import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href={"/"}>
          <DreiDerMuenzeLogo />
        </Link>
      </h1>
    </header>
  );
}
