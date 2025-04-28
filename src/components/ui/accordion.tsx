'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('border-b', className)}
      style={{
        borderImageSource:
          'linear-gradient(to right, transparent, var(--red45), transparent )',
        borderImageSlice: 1,
      }}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  number,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  number: string | number;
}) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-[88px] flex-1 cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:pb-0 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        <div className='flex items-center gap-4'>
          <div className='h-fit w-fit rounded-md border border-[var(--black15)] bg-[var(--black12)] px-4 py-3 font-semibold'>
            {number || '00'}
          </div>
          <h2 className='text-xl font-medium'>{children}</h2>
        </div>
        <ChevronDownIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-[var(--grey60)]'
      {...props}
    >
      <div className={cn('pt-2 pb-4 pl-16', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
