import TemplateCard from "./TemplateCard";
import { trpc } from "../../utils/trpc";
import { useBreakpoint } from "../../hooks";
import { useMemo } from "react";

const TemplateBrowseDisplay = () => {
  const breakpoint = useBreakpoint();

  const { data: templates } = trpc.template.get.useQuery();

  const numberOfCards = useMemo(() => {
    if (breakpoint === "2xl") {
      return 7;
    }
    return 5;
  }, [breakpoint]);

  const renderCards = () => {
    return templates?.slice(0, numberOfCards).map((template) => {
      return <TemplateCard template={template} key={template.id} />;
    });
  };

  return (
    <div className="container grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderCards()}
    </div>
  );
};

export default TemplateBrowseDisplay;
