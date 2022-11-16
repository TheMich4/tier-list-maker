import TierItemContainer from "../TierItemContainer";
import type { TierRowProps } from "../types";

// TODO: Use color

const TierRow = ({ name, color, items, moveItemToTier }: TierRowProps) => {
  return (
    <div className="flex min-h-[100px] flex-row pb-1 last:pb-0">
      <div
        className={`mr-1 flex w-[100px] items-center justify-center rounded-lg border border-black/10 bg-red-200 text-2xl font-bold`}
      >
        {name}
      </div>

      <TierItemContainer
        items={items}
        tierName={name}
        moveItemToTier={moveItemToTier}
      />
    </div>
  );
};

export default TierRow;
