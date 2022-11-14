import TierItemContainer from "../TierItemContainer";
import type { TierRowProps } from "../types";

const TierRow = ({ name, color, items }: TierRowProps) => {
  return (
    <div className="flex min-h-[100px] flex-row pb-1 last:pb-0">
      <div
        className={`flex w-[100px] items-center justify-center rounded-lg border bg-${color} mr-1 border-black/10 text-2xl font-bold`}
      >
        {name}
      </div>

      <TierItemContainer items={items} />
    </div>
  );
};

export default TierRow;
