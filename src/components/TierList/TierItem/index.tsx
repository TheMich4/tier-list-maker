import type { TierItemProps } from "../types";
import { useDrag } from "react-dnd";

const TierItem = ({ name, id, tierName }: TierItemProps) => {
  const [{}, drag] = useDrag(() => ({
    type: "item",
    item: { id, name, tierName },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      className="flex w-[100px] cursor-pointer items-center justify-center rounded-lg bg-base-300/40"
      ref={drag}
    >
      {name}
    </div>
  );
};

export default TierItem;
