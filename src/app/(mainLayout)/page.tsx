import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link
        className="text-primary text-7xl uppercase text-center underline"
        href="/duas"
      >
        Duah
      </Link>
    </div>
  );
}
