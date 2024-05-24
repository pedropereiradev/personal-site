import clsx from 'clsx';

interface Props {
  title: string;
  subtitle: string;
  isCurrent?: boolean;
  children: React.ReactNode;
}

export default function Stepper({
  title,
  subtitle,
  isCurrent = false,
  children,
}: Props) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center gap-1">
        <div
          className={clsx(
            'h-5 w-5 rounded-full',
            isCurrent
              ? 'bg-stone-900 dark:bg-stone-50'
              : 'bg-stone-200 dark:bg-stone-900'
          )}
        />
      </div>
      <div className="flex-1 space-y-1 tracking-tight">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <span className="text-sm text-muted-foreground">{subtitle}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
