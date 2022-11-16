import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterIcon = ({ IconComponent }) => {
  return (
    <a>
      <FontAwesomeIcon
        icon={IconComponent}
        size="xl"
        className="cursor-pointer fill-current"
      />
    </a>
  );
};

export default FooterIcon;
