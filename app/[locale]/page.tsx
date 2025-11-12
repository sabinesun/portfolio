import { DescriptionSection } from "@/components/section/description-section";
import { ProjectSection } from "@/components/section/project-section";
import { SkillSection } from "@/components/section/skill-section";
import { WorkSection } from "@/components/section/work/work-section";
import { getTranslations } from "next-intl/server";

const Home = async () => {
  const t = await getTranslations("home-page");

  return (
    <main className="flex flex-col items-center font-light">
      <div className="w-full md:max-w-xl">
        <div className="mx-10 md:mx-0">
          <section>
            <DescriptionSection />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {t("skills-heading")}
            </h2>
            <SkillSection />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {t("experience-heading")}
            </h2>
            <WorkSection />
          </section>
          <section>
            <h2 className="mb-4 mt-10 w-full text-xl font-medium">
              {t("projects-heading")}
            </h2>
            <ProjectSection />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
