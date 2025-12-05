export default function SectionDivider({ variant = "wave" }: { variant?: "wave" | "curve" | "diagonal" }) {
  if (variant === "wave") {
    return (
      <div className="relative h-24 -mt-1">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 96"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96L48 90.7C96 85 192 75 288 69.3C384 64 480 64 576 69.3C672 75 768 85 864 85.3C960 85 1056 75 1152 64C1248 53 1344 43 1392 37.3L1440 32V96H1392C1344 96 1248 96 1152 96C1056 96 960 96 864 96C768 96 672 96 576 96C480 96 384 96 288 96C192 96 96 96 48 96H0Z"
            className="fill-cream"
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className="relative h-32 -mt-1 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 128"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 128L1440 128V64C1440 64 1320 0 720 0C120 0 0 64 0 64V128Z"
            className="fill-white"
          />
        </svg>
      </div>
    );
  }

  if (variant === "diagonal") {
    return (
      <div className="relative h-20 -mt-1">
        <svg
          className="absolute bottom-0 w-full h-20"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 0V80H0Z"
            className="fill-cream"
          />
        </svg>
      </div>
    );
  }

  return null;
}
