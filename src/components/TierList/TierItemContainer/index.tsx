import TierItem from "../TierItem";
import type { TierItemContainerProps } from "../types";
import { useDrop } from "react-dnd";

const TierItemContainer = ({
  items,
  tierName,
  moveItemToTier,
}: TierItemContainerProps) => {
  const [{}, drop] = useDrop(() => ({
    accept: "item",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item) => {
      moveItemToTier(item, tierName);
    },
  }));

  const renderItems = () => {
    return items?.map((item) => {
      return (
        <TierItem
          name={item.name}
          key={item.name}
          tierName={tierName}
          id={item.id}
        />
      );
    });
  };

  return (
    <div
      className="flex w-full gap-1 rounded-lg border border-base-100/10"
      ref={drop}
    >
      {renderItems()}
    </div>
  );
};

export default TierItemContainer;
