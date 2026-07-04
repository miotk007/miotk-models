import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { ModelCard } from "@/components/ModelCard";
import { getModels } from "@/lib/cms";

export const metadata: Metadata = {
  title: "The Board",
  description: "The Miotk Models roster — curated talent between Europe and Asia.",
};

export default async function BoardPage() {
  const models = await getModels();

  return (
    <>
      <SectionTitle title="The Board" aside={`${models.length} on the board`} />
      <div className="grid grid-cols-2 border-t border-line md:grid-cols-3 lg:grid-cols-4">
        {models.map((m) => (
          <ModelCard key={m.slug} model={m} sizes="(max-width: 768px) 50vw, 25vw" />
        ))}
      </div>
    </>
  );
}
