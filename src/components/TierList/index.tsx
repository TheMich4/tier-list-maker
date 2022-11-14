import TierRow from "./TierRow";

const tiers = [
  { name: "A", color: "red-200", items: [{ name: "111" }] },
  {
    name: "B",
    color: "cyan-200",
    items: [{ name: "222" }, { name: "444" }, { name: "555" }],
  },
  { name: "C", color: "orange-200" },
  { name: "D", color: "blue-200", items: [{ name: "333" }, { name: "666" }] },
];

const TierList = () => {
  const renderTiers = () => {
    return tiers.map((tier) => {
      return (
        <TierRow
          name={tier.name}
          color={tier.color}
          key={tier.name}
          items={tier.items}
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
