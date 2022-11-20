import { Input } from "../../../components";
import type { NextPage } from "next";
import PageContainer from "../../../containers";
import { useState } from "react";

const TemplateCreate: NextPage = () => {
  const [name, setName] = useState<string>("");

  return (
    <PageContainer>
      <div>Create Template</div>

      <Input value={name} onChange={(e) => setName(e.target.value)} />

      <button className="btn-primary btn" onClick={() => console.log(name)}>
        Create
      </button>
    </PageContainer>
  );
};

export default TemplateCreate;
