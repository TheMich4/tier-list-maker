import { Button, Card } from "../../../components";

import type { TemplateCreateButtonsProps } from "../types";
import { trpc } from "../../../utils/trpc";

const TemplateCreateButtons = ({
  name,
  tiers,
  description,
  items,
}: TemplateCreateButtonsProps) => {
  const { mutateAsync: createTemplate, isLoading } =
    trpc.template.create.useMutation();

  const handleSubmit = async () => {
    if (name && tiers.length > 0) {
      await createTemplate({ description, name, tiers, items });

      // TODO: Add redirect to template list
    }
  };

  return (
    <Card>
      <div className="flex gap-2">
        <Button className="btn-error" disabled={isLoading}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          isLoading={isLoading}
        >
          Create
        </Button>
      </div>
    </Card>
  );
};

export default TemplateCreateButtons;
