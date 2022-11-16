import TierItemContainer from "../TierItemContainer";
import TierLabel from "../TierLabel";
import type { TierRowProps } from "../types";

// TODO: Use color

const TierRow = ({ name, color, items, moveItemToTier }: TierRowProps) => {
  return (
    <div className="flex min-h-[100px] flex-row pb-1 last:pb-0">
      <TierLabel name={name} />
      <TierItemContainer
        items={items}
        tierName={name}
        moveItemToTier={moveItemToTier}
      />
    </div>
  );
};

export default TierRow;
