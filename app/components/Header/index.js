import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 315.11 124.96"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <title>Drei der Münze Logo</title>
            <path d="m113.75,35.14c3.6,0,6.51-2.51,6.51-5.62s-2.92-5.62-6.51-5.62-6.51,2.51-6.51,5.62,2.92,5.62,6.51,5.62Z" />
            <path d="m132.26,35.14c3.6,0,6.51-2.51,6.51-5.62s-2.91-5.62-6.51-5.62-6.51,2.51-6.51,5.62,2.92,5.62,6.51,5.62Z" />
            <path d="m158.78,34.75c.94-.26,1.74-.62,2.41-1.08.67-.46,1.23-1,1.7-1.62.47-.62.81-1.29,1.03-2s.33-1.46.33-2.24c0-.73-.08-1.41-.23-2.04-.15-.63-.42-1.25-.81-1.84-.38-.59-.88-1.1-1.48-1.52-.6-.42-1.37-.76-2.32-1.01-.95-.25-2.04-.38-3.26-.38-1.51,0-3.43.18-5.76.55l-.1.85,1.93.34v10.94l-1.93.62-.16.83h5.55c1.12,0,2.15-.13,3.09-.39Zm-4.41-12.53c.3-.03.76-.04,1.37-.04,1,0,1.9.16,2.7.49.79.33,1.44.77,1.93,1.35.49.57.87,1.23,1.13,1.98.26.75.39,1.56.39,2.44,0,.76-.12,1.48-.37,2.13-.24.66-.6,1.25-1.07,1.76s-1.09.92-1.85,1.21-1.63.44-2.59.44h-1.63v-11.76Z" />
            <path d="m167.1,34.31l-.11.83h6.2l.11-.98-2.62-.38v-4.3c.11-.77.37-1.37.76-1.8.4-.43.78-.65,1.16-.65.45,0,.91.15,1.37.44.43-.37.64-.78.64-1.25,0-.34-.11-.64-.34-.89s-.53-.37-.9-.37c-.52,0-1.03.26-1.54.79-.51.53-.91,1.27-1.21,2.24h-.21l.22-2.58-.26-.27-3.22.42-.16.85,1.83.55v6.9l-1.72.45Z" />
            <path d="m178.73,34.2c.4.42.85.73,1.35.96s1.02.33,1.56.33c.73,0,1.42-.13,2.06-.4.64-.27,1.18-.63,1.63-1.11l-.24-.59c-.37.19-.71.34-1.02.44-.31.1-.56.15-.73.16-.17.01-.44.02-.8.02-.4,0-.78-.08-1.12-.23-.34-.15-.63-.36-.86-.61-.23-.25-.43-.55-.61-.89-.17-.34-.3-.69-.39-1.04-.09-.35-.14-.71-.15-1.08l5.44-.07c.12-.51.18-1,.18-1.46,0-1.14-.28-2.02-.85-2.64-.57-.62-1.28-.93-2.14-.93-.55,0-1.1.12-1.65.36-.54.24-1.04.58-1.48,1.01-.44.43-.8.99-1.08,1.68-.28.68-.42,1.43-.42,2.24s.12,1.57.36,2.24c.24.67.56,1.21.96,1.62Zm1.39-7.24c.4-.54.86-.8,1.36-.8,1.03,0,1.55.7,1.55,2.09,0,.34-.02.59-.07.77l-3.53.26c.05-1.01.28-1.78.68-2.32Z" />
            <polygon points="193.78 34.25 191.98 33.84 191.98 25.49 191.7 25.21 188.55 25.47 188.4 26.32 190.1 26.94 190.1 33.84 188.4 34.26 188.27 35.15 193.66 35.15 193.78 34.25" />
            <path d="m190.94,23.13c.38,0,.7-.13.97-.4s.4-.59.4-.97-.13-.66-.4-.91-.59-.37-.97-.37-.67.12-.94.37-.4.54-.4.89c0,.38.13.71.39.98.26.27.58.41.94.41Z" />
            <path d="m205.64,35.38c1.24,0,2.28-.57,3.11-1.71h.1v.08c0,.49.14.88.43,1.19.29.31.7.46,1.24.46s1.09-.07,1.65-.21l.12-.93-.51-.11s-.04-.02-.08-.02c-.25-.05-.41-.09-.49-.12-.08-.03-.19-.1-.33-.2-.14-.1-.23-.24-.27-.4-.04-.17-.06-.39-.06-.67v-11.86l-.24-.27-3.12.27-.16.84,1.71.62v1.76l.13,1.44h-.08c-.19-.13-.46-.25-.83-.35-.37-.1-.73-.15-1.1-.15-.58,0-1.16.14-1.74.43-.58.29-1.11.67-1.58,1.15-.47.48-.85,1.08-1.15,1.8s-.44,1.47-.44,2.25c0,1.48.35,2.64,1.04,3.47.7.83,1.57,1.25,2.62,1.25Zm-1.11-8.2c.38-.69.99-1.04,1.82-1.04.4,0,.83.14,1.29.42.46.28.83.65,1.12,1.11v5.27c-.22.25-.55.49-.99.71-.45.22-.89.33-1.32.33-.73,0-1.33-.35-1.79-1.04-.46-.69-.69-1.68-.69-2.97,0-1.16.19-2.09.57-2.78Z" />
            <path d="m216.4,34.2c.4.42.85.73,1.35.96s1.02.33,1.56.33c.73,0,1.42-.13,2.06-.4.64-.27,1.18-.63,1.63-1.11l-.24-.59c-.37.19-.71.34-1.02.44-.31.1-.56.15-.73.16-.17.01-.44.02-.8.02-.4,0-.78-.08-1.12-.23-.34-.15-.63-.36-.86-.61-.23-.25-.43-.55-.61-.89-.17-.34-.3-.69-.39-1.04-.09-.35-.14-.71-.15-1.08l5.44-.07c.12-.51.18-1,.18-1.46,0-1.14-.28-2.02-.85-2.64-.57-.62-1.28-.93-2.14-.93-.55,0-1.1.12-1.65.36-.54.24-1.04.58-1.48,1.01-.44.43-.8.99-1.08,1.68-.28.68-.42,1.43-.42,2.24s.12,1.57.36,2.24c.24.67.56,1.21.96,1.62Zm1.39-7.24c.4-.54.86-.8,1.36-.8,1.03,0,1.55.7,1.55,2.09,0,.34-.02.59-.07.77l-3.53.26c.05-1.01.28-1.78.68-2.32Z" />
            <path d="m226.08,34.31l-.11.83h6.2l.11-.98-2.62-.38v-4.3c.11-.77.37-1.37.76-1.8.4-.43.78-.65,1.16-.65.45,0,.91.15,1.37.44.43-.37.64-.78.64-1.25,0-.34-.11-.64-.34-.89s-.53-.37-.9-.37c-.52,0-1.03.26-1.54.79-.51.53-.91,1.27-1.21,2.24h-.21l.22-2.58-.26-.27-3.22.42-.16.85,1.83.55v6.9l-1.72.45Z" />

            <path d="m241.96,67.58c0-6.09-10.51-6.09-10.51,0,0,1.35-.47,2.58-1.17,3.51-.76.86-2.03,1.82-3.14,1.82h-7.64l20.88-30.69.07-.07v-2.26h-13.78s-15.04,0-15.04,0h0s-.33,0-.33,0c-3.81.07-6.84,3.17-6.84,6.91s3.03,6.28,6.77,6.28v-.64c-3.39,0-6.14-2.19-6.14-5.64,0-1.27.38-2.46,1.04-3.45,1.15-1.73,3.18-2.66,5.25-2.66h14.84l-19.35,28.99c-.12.14-.24.29-.35.46-1.26,1.94-3.12,4.08-6.35,1.77-2.34-1.67-3.65-4.44-3.65-7.32v-17.71c0-1.91-.78-3.6-1.98-4.87-1.27-1.2-2.96-1.98-4.87-1.98h-13.12c-1.91,0-3.67.78-4.87,1.98-.78.78-1.41,1.76-1.69,2.82-.35-1.06-.92-2.05-1.69-2.82-1.27-1.2-2.96-1.98-4.87-1.98h-13.12v.64c1.69,0,3.25.71,4.37,1.83s1.83,2.68,1.83,4.38v20.75c-.21,1.35-.84,2.55-1.75,3.46-1.51,1.51-3.77,2.26-6.12,1.58-2.74-.79-4.53-3.42-4.53-6.27v-26.01s0-.35,0-.35h-13.76v26.6c0,1.76-.71,3.32-1.83,4.44-1.51,1.51-3.78,2.26-6.13,1.58-2.73-.79-4.53-3.42-4.53-6.27v-19.51c0-3.78-3.06-6.84-6.84-6.84h-13.12v.64c3.46,0,6.21,2.82,6.21,6.28v14.61c-.42-.98-1.02-1.86-1.77-2.61-1.55-1.55-3.74-2.54-6.07-2.54v.64c2.19,0,4.16.92,5.57,2.33,1.25,1.19,2.04,2.84,2.26,4.64v2c-.22,1.78-1.01,3.38-2.26,4.57-.63.65-1.37,1.17-2.17,1.55-.4.18-.79.33-1.16.44-.02,0-.05.02-.07.02-.1.03-.2.05-.29.07-1.46.35-3,.24-4.37-.41-1.08-.56-2.91-1.84-3.55-4.36-.07-.38-.12-.77-.12-1.17V25.01h6.14v-.85h-19.91c-4.52,9.63-7.98,19.71-10.43,30.04l-10.88-26.31c-.94-2.26-3.14-3.74-5.59-3.74,0,0-13.58,0-13.59,0-.22,0-5.47-.1-10.45,4.73-5.66,5.5-8.53,14.88-8.53,27.89,0,26.67,9.74,44.98,26.3,50.32,1.24.54,2.6.85,4.04.86.01,0,.03,0,.04,0,0,0,2.62,0,2.62,0h-.67c2.56-.04,5.77-1.04,7.72-2.99,3.98-3.98,3.98-10.44,0-14.42-1.95-1.95-4.5-2.94-7.05-2.98h-2.6s0,0,0,0c0,0-.01,0-.02,0-2.61,0-5.22,1-7.21,2.99-2.77,2.77-3.61,6.74-2.52,10.24,0,.02.01.04.02.05.09.3.2.59.32.88,0,.02.02.04.03.07.12.28.25.56.4.83,0,.02.02.03.03.05.15.27.31.54.49.8,0,0,0,0,0,.01.36.53.76,1.03,1.23,1.5.05.05.11.1.16.14.11.1.22.2.33.3-14.43-6.6-22.87-23.46-22.87-48.65,0-12.77,2.78-21.95,8.27-27.3,4.73-4.6,9.82-4.51,9.89-4.51h2.12s-.02,17.5-.02,17.5v25.46c0,1.52,1.1,3.38,2.02,4.26.98.93,2.4,1.46,3.94,1.46,6.09,0,6.09-10.51,0-10.51-1.35,0-2.58-.47-3.51-1.17-.86-.76-1.54-1.96-1.54-3.07l-.07-15.91v-17.55c.84.48,1.4,1.25,1.86,2.2l.44.9.14.31,17.12,44.71h5.02s.5-3.73.5-3.73c2.04-14.98,6.24-29.54,12.48-43.3v40.19c0,1.91.78,3.6,1.98,4.87,1.27,1.2,2.96,1.98,4.87,1.98,0,0,12.86,0,13.13-.02.19-.01.63-.03.78-.05,0,0,0,0,0,0,0,0,0,0,.01,0,0,0,.01,0,.02,0,1.94-.2,3.78-1.07,5.19-2.42.85-.84,1.49-1.88,1.92-3.02.66,3.13,3.44,5.49,6.77,5.49h13.12c1.91,0,3.6-.78,4.87-2.05.78-.78,1.34-1.69,1.69-2.75.85,2.75,3.46,4.8,6.56,4.8h13.12c1.91,0,3.6-.78,4.87-2.05.51-.51.93-1.12,1.26-1.79v3.83h13.76v-26.67c0-1.69.71-3.25,1.83-4.38s2.68-1.83,4.45-1.83,3.25.71,4.38,1.83,1.83,2.68,1.83,4.38v19.83c0,3.78,3.06,6.84,6.84,6.84h13.19c1.06,0,1.98-.47,2.79-1.12v1.12h30.64c1.52,0,3.38-1.1,4.26-2.02.93-.98,1.46-2.4,1.46-3.94Zm-204.05,30.2c0-5.18,4.21-9.39,9.39-9.39s9.39,4.21,9.39,9.39-4.21,9.39-9.39,9.39-9.39-4.21-9.39-9.39Z" />

            <path d="m286.07,21.33c-8.4-5.71-20.18-5.78-35-.24l-.08.02-3.45,1.28c-1.42.53-2.79,2.21-3.29,3.38-.53,1.25-.54,2.76,0,4.2,2.12,5.71,11.97,2.06,9.85-3.65-.47-1.27-.46-2.58-.12-3.69.4-1.03,1.09-2.05,2.07-2.48,12.38-3.77,22.33-3.19,29.63,1.77,9.36,6.36,11.83,18.43,11.83,23.92,0,9.19-2.52,16.22-7.5,20.9-7.15,6.72-17.02,6.19-17.13,6.19l-7.32-.06c-3.87-.41-5.2-4.61-6.13-9.77-.21-1.27-.42-2.54-.49-3.88h21.52c8.82,0,9.1-19.19-.56-19.19h-26.81c-10.37,0-10.37,33.51,0,33.51h9.34l10.44.08s.23.01.61.01c2.31,0,10.69-.43,17.02-6.38,5.13-4.82,7.73-12.02,7.73-21.41,0-5.62-2.54-17.98-12.14-24.5Zm-19.74,19.33c5.36,0,7.41,5.01,7.48,9.67.07,4.09-1.76,8.25-6.49,8.25h-8.47c-.28-5.43-.63-17.92,7.48-17.92Z" />
          </svg>
        </Link>
      </h1>
    </header>
  );
}
