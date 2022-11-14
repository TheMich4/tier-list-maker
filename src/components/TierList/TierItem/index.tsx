const TierItem = ({ name }) => {
  return (
    <div className="flex w-[100px] cursor-pointer items-center justify-center rounded-lg bg-base-300/40">
      {name}
    </div>
  );
};

export default TierItem;
