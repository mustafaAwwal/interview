import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Link href="/form" className="btn btn-primary">
        Form task
      </Link>
      <Link href="/server-component" className="btn btn-primary">
        Server component task
      </Link>
    </div>
  );
}
