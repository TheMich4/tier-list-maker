import type { TemplateCreateButtonsProps } from "../types";
import { trpc } from "../../../utils/trpc";

const TemplateCreateButtons = ({ name, tiers }: TemplateCreateButtonsProps) => {
  const create = trpc.template.create.useMutation();

  const handleSubmit = async () => {
    console.log("handleSubmit", { name, tiers });
    if (name && tiers.length > 0) {
      await create.mutateAsync({ name, tiers });
    }
  };

  return (
    <div className="flex gap-2">
      <button className="btn">Cancel</button>
      <button className="btn-primary btn" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default TemplateCreateButtons;
