import type { TierItem } from "./types";
import TierRow from "./TierRow";
import { useState } from "react";

const TierList = () => {
  // TODO: Add types
  const [tiers, setTiers] = useState<Array<any>>([
    { name: "A", color: "red-200", items: [{ name: "111", id: 1 }] },
    {
      name: "B",
      color: "cyan-200",
      items: [
        { name: "222", id: 2 },
        { name: "444", id: 4 },
        { name: "555", id: 5 },
      ],
    },
    { name: "C", color: "orange-200" },
    {
      name: "D",
      color: "blue-200",
      items: [
        { name: "333", id: 3 },
        { name: "666", id: 6 },
      ],
    },
  ]);

  // TODO: Add types
  const moveItemToTier = (item: any, newTier: string) => {
    setTiers((prevTiers) =>
      prevTiers.map((tier) => {
        if (tier.name === item.tierName) {
          return {
            ...tier,
            items: tier.items?.filter((i: TierItem) => i.id !== item.id),
          };
        } else if (tier.name === newTier) {
          return {
            ...tier,
            items: tier.items ? [...tier.items, item] : [item],
          };
        } else {
          return tier;
        }
      })
    );
  };

  const renderTiers = () => {
    return tiers.map((tier) => {
      return (
        <TierRow
          name={tier.name}
          color={tier.color}
          key={tier.name}
          items={tier.items}
          moveItemToTier={moveItemToTier}
        />
      );
    });
  };

  return (
    <div className="overflow-hidde card border border-black/10 bg-base-200/70 p-1 shadow-xl">
      {renderTiers()}
    </div>
  );
};

export default TierList;
