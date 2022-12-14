import Button from "../Button";
import type { TierItem } from "./types";
import TierRow from "./TierRow";
import TierWorkplace from "./TierWorkplace";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const dt = [
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
  { name: "Some longer name", color: "orange-200" },
  {
    name: "D",
    color: "blue-200",
    items: [
      { name: "333", id: 3 },
      { name: "666", id: 6 },
    ],
  },
];

const TierList = ({ defaultTiers = dt }) => {
  // TODO: Add types
  const [tiers, setTiers] = useState<Array<any>>(defaultTiers);
  const [unassigned, setUnassigned] = useState<Array<any>>([
    { name: "777", id: 7 },
    { name: "888", id: 8 },
  ]);

  // TODO: Add types
  const moveItemToTier = (item: any, newTier: string) => {
    // Remove item from workplace
    if (!item.tierName) {
      setUnassigned((prevUnassigned) => {
        return prevUnassigned.filter((i: TierItem) => i.id !== item.id);
      });
    }

    // Move item to correct tier
    setTiers((prevTiers) => {
      if (item.tierName === newTier) {
        return prevTiers;
      }

      return prevTiers.map((tier) => {
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
      });
    });
  };

  const addTier = () => {
    // TODO: increment tier id
    // Tiers can have changed order so +1 doesn't work
    setTiers((prevTiers) => {
      return [
        ...prevTiers,
        {
          name: "New Tier",
          color: "gray-200",
        },
      ];
    });
  };

  const moveItemToWorkplace = (item: any) => {
    // Remove item from tier
    setTiers((prevTiers) =>
      prevTiers.map((tier) => {
        if (tier.name === item.tierName) {
          return {
            ...tier,
            items: tier.items?.filter((i: TierItem) => i.id !== item.id),
          };
        }
        return tier;
      })
    );

    // Move item to workplace
    setUnassigned((prevUnassigned) => [
      ...prevUnassigned,
      { ...item, tierName: undefined },
    ]);
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
    <div className="flex flex-col gap-2">
      <div>
        <Button
          Icon={faPlus}
          iconProps={{ color: "black" }}
          onClick={addTier}
          disabled={tiers.length >= 10}
        >
          Add new tier
        </Button>
      </div>
      <div className="card overflow-hidden rounded-xl border border-black/10 bg-neutral p-1 shadow-xl">
        {renderTiers()}
      </div>
      <TierWorkplace
        items={unassigned}
        moveItemToWorkplace={moveItemToWorkplace}
      />
    </div>
  );
};

export default TierList;
