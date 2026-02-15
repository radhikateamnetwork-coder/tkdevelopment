export default function Logo({ size = 200, className, brand, ...props }) {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* <circle
        cx="250"
        cy="250"
        r="235"
        fill="none"
        stroke="#133c51"
        strokeWidth="10"
      /> */}
      {/* <path d="m220 1-90 29-75 62-46 88-7 104 25 80 65 80 89 46 104 7 103-39 66-64 37-79 5-108-38-96-64-66-82-38Z" fill="#ffffff" /> */}
      <path d="m252 147 1 184h27l12-56 49 55 36 1-66-74 67-64h-34l-62 60-1-84Z" fill="#74797d" />
      <path d="m245 96-125 75 1 30 50-26v155l23-3V151l50-31Z" fill="#1e6ea2" />
      <path d="m245 147-51 25v159h16V200l35-21Z" fill="#74797d" />
      <path d="M254 96v23l50 32v70l23-23v-59Z" fill="#1e6ea2" />
      <path d="m164 193-29 18-1 32 29-16Z" fill="#74797d" />
    </svg>
  );
}
