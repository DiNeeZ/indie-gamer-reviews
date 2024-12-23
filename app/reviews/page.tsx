import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <div>
      <Heading>Reviews</Heading>
      <h2 className="sr-only">List reviews</h2>
      <ul className="flex flex-col gap-3">
        <li className="w-80 rounded border bg-white shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt="hollow knight"
              width={320}
              height={180}
              className="mb-2 rounded-t"
            />
            <h3 className="font-orbitron py-1 text-center font-semibold">
              Hollow Knight
            </h3>
          </Link>
        </li>
        <li className="w-80 rounded border bg-white shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt="hollow knight"
              width={320}
              height={180}
              className="mb-2 rounded-t"
            />
            <h3 className="font-orbitron py-1 text-center font-semibold">
              Stardew Valley
            </h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}
