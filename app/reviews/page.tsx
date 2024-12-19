import Link from "next/link";
import React from "react";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <div>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews.</p>
      <ul>
        <li>
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
        <li>
          <Link href="/reviews/hollow-knight">Stardew Valley</Link>
        </li>
      </ul>
    </div>
  );
}
