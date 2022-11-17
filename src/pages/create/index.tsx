import { Input, TierList } from "../../components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import PageContainer from "../../containers";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Create: NextPage = () => {
  const [name, setName] = useState("");

  return (
    <PageContainer>
      <div className="h-full w-full">
        <div className="flex flex-row space-x-2">
          <Input
            placeholder="Tier List Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn-square btn">
            <FontAwesomeIcon icon={faCheck} color="white" size="lg" />
          </button>
        </div>

        <div className="divider" />

        <TierList />
      </div>
    </PageContainer>
  );
};

export default Create;
