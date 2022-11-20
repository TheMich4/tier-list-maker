import { Input } from "../../../components";
import type { NextPage } from "next";
import PageContainer from "../../../containers";
import { trpc } from "../../../utils/trpc";
import { useState } from "react";

const TemplateCreate: NextPage = () => {
  // const { data: users, isLoading } = trpc.user.getAllUsers.useQuery();
  const [name, setName] = useState<string>("");

  const create = trpc.template.create.useMutation();

  console.log({ create });

  return (
    <PageContainer>
      <div>Create Template</div>

      <Input value={name} onChange={(e) => setName(e.target.value)} />

      <button
        className="btn-primary btn"
        onClick={async () => {
          console.log(name);
          name && (await create.mutateAsync({ name }));
        }}
      >
        Create
      </button>
    </PageContainer>
  );
};

export default TemplateCreate;
