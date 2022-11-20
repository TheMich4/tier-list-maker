import type { NextPage } from "next";
import PageContainer from "../../../containers";
import { TemplateBrowseDisplay } from "../../../displays";

const TemplateBrowse: NextPage = () => {
  return (
    <PageContainer>
      <TemplateBrowseDisplay />
    </PageContainer>
  );
};

export default TemplateBrowse;
