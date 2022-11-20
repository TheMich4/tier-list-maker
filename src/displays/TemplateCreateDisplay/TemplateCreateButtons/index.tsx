import { Card } from "../../../components";
import type { TemplateCreateButtonsProps } from "../types";
import { trpc } from "../../../utils/trpc";

const TemplateCreateButtons = ({
  name,
  tiers,
  description,
}: TemplateCreateButtonsProps) => {
  const create = trpc.template.create.useMutation();

  const handleSubmit = async () => {
    if (name && tiers.length > 0) {
      await create.mutateAsync({ description, name, tiers });
    }
  };

  return (
    <Card>
      <div className="flex gap-2">
        <button className="btn">Cancel</button>
        <button className="btn-primary btn" onClick={handleSubmit}>
          Create
        </button>
      </div>
    </Card>
  );
};

export default TemplateCreateButtons;
