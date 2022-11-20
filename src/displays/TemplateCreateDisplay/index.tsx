import { Input } from "../../components";
import TemplateCreateButtons from "./TemplateCreateButtons";
import TemplateCreateTiers from "./TemplateCreateTiers";
import { useState } from "react";

const TemplateCreateDisplay = () => {
  const [name, setName] = useState<string>("");
  const [tiers, setTiers] = useState([]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Template name"
      />

      <TemplateCreateTiers tiers={tiers} setTiers={setTiers} />

      <TemplateCreateButtons name={name} tiers={tiers} />
    </div>
  );
};

export default TemplateCreateDisplay;
