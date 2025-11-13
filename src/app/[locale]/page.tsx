"use client";

import Stepper from "@/components/Stepper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CodeSquareIcon,
  GraduationCap,
  Award,
  Github,
  Sprout,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const tExp = useTranslations("experience");
  const tProj = useTranslations("projects");
  const tEdu = useTranslations("education");
  const tCert = useTranslations("certifications");

  return (
    <main className="max-w-5xl mx-auto flex flex-col space-y-12 tracking-tight px-4 md:px-0 pb-12">
      {/* Professional Summary */}
      <AnimatedSection delay={0.1}>
        <section className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-bold">{t("aboutMe")}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t.rich("professionalSummary", {
              yearsOfExperience: (chunks) => (
                <span className="font-semibold text-foreground">{chunks}</span>
              ),
              specialties: (chunks) => (
                <span className="font-semibold text-foreground">{chunks}</span>
              ),
              fuelNetwork: (chunks) => (
                <span className="font-semibold text-foreground">{chunks}</span>
              ),
            })}
          </p>
        </section>
      </AnimatedSection>

      {/* Technical Skills */}
      <AnimatedSection delay={0.2}>
        <section className="space-y-6">
          <h2 className="scroll-m-20 text-2xl font-bold">
            {t("technicalSkills")}
          </h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{t("languages")}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Sway</Badge>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{t("frontend")}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{t("backend")}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">Bun</Badge>
                  <Badge variant="secondary">Elysia</Badge>
                  <Badge variant="secondary">NestJS</Badge>
                  <Badge variant="secondary">Fastify</Badge>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  {t("cloudInfrastructure")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">GitHub Actions</Badge>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{t("blockchainWeb3")}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Smart Contracts</Badge>
                  <Badge variant="secondary">Ethereum</Badge>
                  <Badge variant="secondary">Fuel Network</Badge>
                  <Badge variant="secondary">Sway</Badge>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  {t("databasesMessaging")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">RabbitMQ</Badge>
                  <Badge variant="secondary">BullMQ</Badge>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection delay={0.3}>
        <section className="flex flex-col gap-8">
          <h2 className="scroll-m-20 text-2xl font-bold">{t("experience")}</h2>
          <section className="flex flex-col gap-8">
            <Stepper
              title={tExp("infinitybase.title")}
              subtitle={tExp("infinitybase.period")}
              isCurrent
            >
              <section className="space-y-3 text-muted-foreground">
                <h3 className="font-semibold text-foreground">
                  {tExp("infinitybase.company")} • {t("remote")}
                </h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i}>
                      {tExp.rich(`infinitybase.achievements.${i}`, {
                        technicalLead: (chunks) => (
                          <span className="font-medium text-foreground">
                            {chunks}
                          </span>
                        ),
                      })}
                    </li>
                  ))}
                </ul>
              </section>
            </Stepper>

            <Stepper
              title={tExp("ganjaMarket.title")}
              subtitle={tExp("ganjaMarket.period")}
            >
              <section className="space-y-3 text-muted-foreground">
                <h3 className="font-semibold text-foreground">
                  {tExp("ganjaMarket.company")} • {t("remote")}
                </h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <li key={i}>{tExp(`ganjaMarket.achievements.${i}`)}</li>
                  ))}
                </ul>
              </section>
            </Stepper>
          </section>
        </section>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection delay={0.4}>
        <section className="flex flex-col gap-8">
          <h2 className="scroll-m-20 text-2xl font-bold">
            {t("featuredProjects")}
          </h2>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard
              icon={<Sprout className="w-6 h-6 text-muted-foreground" />}
              title={tProj("agroshield.title")}
              description={tProj("agroshield.description")}
              content={tProj("agroshield.content")}
              techStack={[
                "Fuel Network",
                "Sway",
                "React",
                "Fastify",
                "PostgreSQL",
                "GraphQL",
              ]}
              features={[
                tProj("agroshield.features.0"),
                tProj("agroshield.features.1"),
                tProj("agroshield.features.2"),
                tProj("agroshield.features.3"),
              ]}
              githubUrl="https://github.com/pedropereiradev/agroshield-monorepo"
              delay={0.5}
            />

            <ProjectCard
              icon={
                <CodeSquareIcon className="w-6 h-6 text-muted-foreground" />
              }
              title={tProj("fuelConnectors.title")}
              description={tProj("fuelConnectors.description")}
              content={tProj("fuelConnectors.content")}
              techStack={["TypeScript", "Sway", "Wagmi", "Viem", "RPC"]}
              features={[
                tProj("fuelConnectors.features.0"),
                tProj("fuelConnectors.features.1"),
                tProj("fuelConnectors.features.2"),
                tProj("fuelConnectors.features.3"),
              ]}
              githubUrl="https://github.com/FuelLabs/fuel-connectors"
              delay={0.6}
            />
          </section>
        </section>
      </AnimatedSection>

      {/* Education & Certifications */}
      <AnimatedSection delay={0.5}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h2 className="scroll-m-20 text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              {tEdu("title")}
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  {tEdu("systemsAnalysis.degree")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tEdu("systemsAnalysis.type")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {tEdu("systemsAnalysis.institution")} •{" "}
                  {tEdu("systemsAnalysis.year")}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  {tEdu("electronics.degree")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tEdu("electronics.type")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {tEdu("electronics.institution")} • {tEdu("electronics.year")}
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h2 className="scroll-m-20 text-2xl font-bold flex items-center gap-2">
              <Award className="w-6 h-6" />
              {tCert("title")}
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">
                    {tCert("awsAcademy.title")}
                  </CardTitle>
                  <CardDescription>
                    {tCert("awsAcademy.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tCert("awsAcademy.year")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Languages */}
      <AnimatedSection delay={0.6}>
        <section className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-bold">
            {t("spokenLanguages")}
          </h2>
          <div className="flex gap-6">
            <div>
              <p className="font-semibold">{t("portuguese")}</p>
              <p className="text-sm text-muted-foreground">{t("native")}</p>
            </div>
            <div>
              <p className="font-semibold">{t("english")}</p>
              <p className="text-sm text-muted-foreground">{t("advanced")}</p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
