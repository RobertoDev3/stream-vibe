import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-[var(--red45)] text-white hover:bg-[var(--red45)]/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-transparent hover:bg-[var(--black15)] border-[var(--grey75)]',
        secondary:
          'bg-[var(--black08)] border border-[var(--black15)] text-white hover:bg-[var(--black15)]',
        ghost: 'hover:bg-[var(--black15)]',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-6 py-3.5',
        sm: 'h-8 rounded-md gap-1.5 px-3 ',
        lg: 'h-10 rounded-md px-6 ',
        icon: 'p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  title,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  } & { title?: string }) {
  const Comp = asChild ? Slot : 'button';

  return title ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Comp
            data-slot='button'
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
          />
        </TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
