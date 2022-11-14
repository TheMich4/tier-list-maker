import TierItem from "../TierItem";

const TierItemContainer = ({ items }) => {
  const renderItems = () => {
    return items?.map((item) => {
      return <TierItem name={item.name} key={item.name} />;
    });
  };

  return (
    <div className="flex w-full gap-1 rounded-lg border border-black/10">
      {renderItems()}
    </div>
  );
};

export default TierItemContainer;
