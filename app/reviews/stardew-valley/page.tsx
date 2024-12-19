import Heading from "@/components/Heading";

export default function StardewValleyPage() {
  return (
    <div>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="stardew valley"
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <p>
        Stardew Valley is a farming simulation game primarily inspired by Story
        of Seasons, a series by Marvelous and previously known as Harvest Moon.
        At the start of the game, players create a character, who inherits a
        plot of land and a small house once owned by their grandfather in a
        small village called Pelican Town, located in the titular Stardew
        Valley.
      </p>
    </div>
  );
}
