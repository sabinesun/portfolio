import { DescriptionSection } from "@/components/section/description-section";
import { ProjectSection } from "@/components/section/project-section";
import { SkillSection } from "@/components/section/skill-section";
import { WorkSection } from "@/components/section/work/work-section";
import { ResumeDescription } from "@/features/resume/resume-description";
import resume from "@/resume.json";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Home = async () => {
  const [tHome, tResume] = await Promise.all([
    getTranslations("home-page"),
    getTranslations("resume"),
  ]);
  const { basics } = resume;
  const isDecember = new Date().getMonth() === 11;
  const avatarSrc = isDecember ? "/logo/me-christmas.svg" : "/logo/me.svg";

  return (
    <main className="flex flex-col items-center font-light">
      <div className="w-full md:max-w-xl">
        <div className="mx-8 flex flex-col gap-10 md:mx-0">
          <section>
            <div className="relative flex w-full">
              <div className="relative block size-28 shrink-0 md:size-36">
                <Image alt="" fill src={avatarSrc} />
              </div>
              <div className="absolute left-28 top-1/2 md:left-36">
                <h2 className="text-lg font-medium leading-6">
                  {tResume(basics.nameKey)}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {tHome("tagline")}
                </p>
              </div>
            </div>
            <ResumeDescription />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {tHome("about-heading")}
            </h2>
            <DescriptionSection />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {tHome("skills-heading")}
            </h2>
            <SkillSection />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {tHome("experience-heading")}
            </h2>
            <WorkSection />
          </section>
          <section>
            <h2 className="mb-4 mt-10 w-full text-xl font-medium">
              {tHome("projects-heading")}
            </h2>
            <ProjectSection />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
