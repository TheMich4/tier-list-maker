import { Button, Input } from "../../../components";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

const maxTiers = 10;

const TemplateCreateTiers = ({ tiers, setTiers }) => {
  const handleAddTier = () => {
    if (tiers.length < maxTiers) {
      setTiers((prevTiers) => [
        ...prevTiers,
        { id: prevTiers.length, name: "" },
      ]);
    }
  };

  const handleTierNameChange = (event, tierId) => {
    setTiers((prevTiers) =>
      prevTiers.map((tier) =>
        tier.id === tierId ? { ...tier, name: event.target.value } : tier
      )
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <div>Tiers:</div>
      <Button
        disabled={tiers.length >= maxTiers}
        Icon={faPlus}
        iconProps={{ color: "black" }}
        onClick={handleAddTier}
      >
        Add new tier
      </Button>

      {tiers.map((tier) => (
        <Input
          value={tier.name}
          key={tier.id}
          placeholder="New tier name"
          onChange={(event) => handleTierNameChange(event, tier.id)}
        />
      ))}
    </div>
  );
};

export default TemplateCreateTiers;
