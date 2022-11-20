import { Card, Input } from "../../components";

import TemplateCreateButtons from "./TemplateCreateButtons";
import TemplateCreateTiers from "./TemplateCreateTiers";
import { useState } from "react";

const TemplateCreateDisplay = () => {
  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [tiers, setTiers] = useState([]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <Card className="flex min-w-[300px] gap-2">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Template name"
        />
        <Input
          value={description}
          placeholder={"Template description"}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Card>

      <TemplateCreateTiers tiers={tiers} setTiers={setTiers} />

      <TemplateCreateButtons
        name={name}
        tiers={tiers}
        description={description}
      />
    </div>
  );
};

export default TemplateCreateDisplay;
