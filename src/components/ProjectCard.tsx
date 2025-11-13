'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  content: string;
  techStack: string[];
  features?: string[];
  githubUrl?: string;
  delay?: number;
}

export function ProjectCard({
  icon,
  title,
  description,
  content,
  techStack,
  features,
  githubUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-start justify-between">
            <section className="flex items-center gap-2">
              {icon}
              <span>{title}</span>
            </section>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>

          {techStack.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">Tech Stack:</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {features && features.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">Key Features:</p>
              <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
