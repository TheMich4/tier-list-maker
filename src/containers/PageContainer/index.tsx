import { Footer, Navbar } from "../../components";

import type { PageContainerProps } from "./types";

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="bg-base-100">
      <main className="bc container mx-auto flex min-h-screen flex-col items-center p-4">
        <Navbar />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageContainer;
