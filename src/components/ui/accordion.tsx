'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

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
          'focus-visible:border-ring group focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:pb-0',
          className,
        )}
        {...props}
      >
        <div className='flex items-center gap-4'>
          <div className='h-fit w-fit rounded-md border border-[var(--black15)] bg-[var(--black12)] px-4 py-3 font-semibold'>
            {number || '00'}
          </div>
          <h2 className='flex min-h-[56px] items-center text-xl font-medium'>
            {children}
          </h2>
        </div>

        <div>
          <MinusIcon className='pointer-events-none hidden size-6 shrink-0 text-white group-data-[state=open]:block' />
          <PlusIcon className='pointer-events-none block size-6 shrink-0 text-white group-data-[state=open]:hidden' />
        </div>
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
      <div className={cn('pb-4 pl-16', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
