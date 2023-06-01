export default function ChevronDown({ rotate }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        transform: rotate ? "rotate(180deg)" : "",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <title>chevron-down</title>

      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  );
}
