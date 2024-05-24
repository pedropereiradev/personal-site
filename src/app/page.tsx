import Stepper from '@/components/Stepper';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BrickWall, CodeSquareIcon, StoreIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col space-y-8 tracking-tight px-4 md:px-0">
      <section>
        <p className="text-muted-foreground">
          I am a software developer with experience developing solutions for
          fintechs. In addition to coding, I also served as a project leader,
          conducting code reviews and collaborating closely with product teams
          to ensure high-quality deliverables within established deadlines.
          Currently my focus is on developing Web3 and blockchain solutions.
        </p>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="scroll-m-20 text-xl font-semibold">Experience</h2>
        <section className="flex flex-col gap-6">
          <Stepper
            title="Software Developer"
            subtitle="Oct 2023 - Present"
            isCurrent
          >
            <section className="text-muted-foreground">
              <h3 className="font-semibold">InfinityBase</h3>
              <p>
                I am currently working at a company as a software developer with
                significant experience in fintechs. My current focus is on web3
                projects, where I have contributed to open source initiatives.
                Specifically, I have developed connectors in an Ethereum rollup
                to integrate with wallets from the Ethereum and Solana networks.
              </p>
            </section>
          </Stepper>
          <Stepper title="Full Stack Developer" subtitle="Dec 2022 - Aug 2023">
            <section className="text-muted-foreground">
              <h3 className="font-semibold">Ganja Market</h3>
              <p>
                I developed a marketplace using NodeJS, NestJS, NextJS, and
                MongoDB, providing technical leadership to ensure best practices
                and timely delivery. I led the implementation of an advanced
                payment system with features like split payments and fee
                calculations, and created a custom discount coupon system to
                enhance user engagement. Additionally, I contributed to
                strategic meetings with innovative ideas and proactively
                resolved technical issues to maintain system stability and
                scalability.
              </p>
            </section>
          </Stepper>
        </section>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="scroll-m-20 text-xl font-semibold">Personal Projects</h2>
        <section className="grid grid-cols-1 lg:grid-cols-3">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>
                <section className="flex items-center gap-2">
                  <BrickWall className="w-6 h-6 text-muted-foreground" />
                  Saas Project
                </section>
              </CardTitle>
              <CardDescription>Current building</CardDescription>
            </CardHeader>
            <CardContent>
              This project is currently in development so I can&apos;t share
              much.
            </CardContent>
          </Card>
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>
                <section className="flex items-center gap-2">
                  <StoreIcon className="w-6 h-6 text-muted-foreground" />
                  Architecture Briefing
                </section>
              </CardTitle>
              <CardDescription>
                Pre briefing for architect customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              Pre briefing developt to the architect send to her customers
              before the project start and get more information about customer
              needs.
            </CardContent>
          </Card>
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>
                <section className="flex items-center gap-2">
                  <CodeSquareIcon className="w-6 h-6 text-muted-foreground" />
                  My portfolio
                </section>
              </CardTitle>
              <CardDescription>
                Portfolio about myself and my projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              My portfolio is this project, where I can share my experience and
              post some arcticles about tech topics that I like. I&apos;m also
              using it to share things that I&apos;m learning.
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
