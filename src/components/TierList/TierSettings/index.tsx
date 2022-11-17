import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const TierSettings = () => {
  return (
    <div className="ml-1 flex w-[50px] items-center justify-center rounded-lg border border-base-100/10">
      <button className="">
        <FontAwesomeIcon icon={faGear} color="white" size="lg" />
      </button>
    </div>
  );
};

export default TierSettings;
