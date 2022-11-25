import { faGear, faGripLines } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TierSettings = () => {
  return (
    <div className="ml-1 flex w-[50px] flex-col items-center justify-evenly rounded-lg border border-base-100/10">
      <FontAwesomeIcon
        icon={faGripLines}
        color="white"
        size="lg"
        className="cursor-pointer"
      />
      <button className="">
        <FontAwesomeIcon icon={faGear} color="white" size="lg" />
      </button>
    </div>
  );
};

export default TierSettings;
