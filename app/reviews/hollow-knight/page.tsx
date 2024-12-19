import React from "react";
import Heading from "@/components/Heading";

export default function HollowKnightPage() {
  return (
    <div>
      <Heading>Hollow Knight</Heading>
      <img
        src="/images/hollow-knight.jpg"
        alt="hollow knight"
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <p>
        Metroidvania video game developed and published by independent developer
        Team Cherry. The player controls the Knight, an insectoid warrior
        exploring Hallownest, a fallen kingdom plagued by a supernatural
        disease. The game is set in diverse subterranean locations, featuring
        friendly and hostile insectoid characters and numerous bosses. Players
        have the opportunity to unlock abilities as they explore, along with
        pieces of lore and flavour text that are spread throughout the kingdom.
      </p>
    </div>
  );
}
