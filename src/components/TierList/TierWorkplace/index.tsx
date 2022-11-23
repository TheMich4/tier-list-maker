import TierItem from "../TierItem";
import { useDrop } from "react-dnd";

const TierWorkplace = ({ items, moveItemToWorkplace }) => {
  const [{}, drop] = useDrop(() => ({
    accept: "item",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item) => {
      moveItemToWorkplace(item);
    },
  }));

  const renderItems = () => {
    return items?.map((item) => {
      return <TierItem name={item.name} key={item.name} id={item.id} />;
    });
  };

  return (
    <div
      className="card min-h-[100px] flex-row gap-1 overflow-hidden rounded-xl border border-black/10 bg-neutral p-1 text-white shadow-xl"
      ref={drop}
    >
      {renderItems()}
    </div>
  );
};

export default TierWorkplace;
