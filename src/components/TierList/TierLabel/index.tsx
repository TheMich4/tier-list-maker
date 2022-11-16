const TierLabel = ({ name }: TierLabelProps) => {
  return (
    <div
      className={`mr-1 flex w-[100px] items-center justify-center rounded-lg border border-black/10 bg-red-200 text-center text-2xl font-bold`}
    >
      {name}
    </div>
  );
};

export default TierLabel;
