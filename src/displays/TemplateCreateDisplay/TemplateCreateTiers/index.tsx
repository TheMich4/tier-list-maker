import { Button, Card, Input } from "../../../components";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const maxTiers = 10;

const TemplateCreateTiers = ({ tiers, setTiers }) => {
  const handleAddTier = () => {
    if (tiers.length < maxTiers) {
      setTiers((prevTiers) => [
        ...prevTiers,
        {
          id:
            // Increment id, start with 0 if no tiers exist
            prevTiers.length === 0 ? 1 : prevTiers[prevTiers.length - 1].id + 1,
          name: "",
        },
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

  const handleTierDelete = (tierId) => {
    setTiers((prevTiers) => prevTiers.filter((tier) => tier.id !== tierId));
  };

  return (
    <Card>
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
          <div key={tier.id} className="flex flex-row gap-2">
            <Input
              value={tier.name}
              placeholder="New tier name"
              onChange={(event) => handleTierNameChange(event, tier.id)}
            />
            <Button
              className="btn-error"
              Icon={faTrash}
              onClick={() => handleTierDelete(tier.id)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TemplateCreateTiers;
