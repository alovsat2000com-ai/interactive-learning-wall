import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function Accordion({ children }: { children: React.ReactNode }) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className="w-full space-y-4"
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

export function AccordionItem({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className="border border-gray-300 rounded-xl overflow-hidden bg-white"
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className="w-full flex items-center justify-between px-4 py-3 text-left text-lg font-medium text-primary cursor-pointer hover:bg-gray-100 transition"
      >
        {children}
        <ChevronDown className="w-5 h-5 transition-transform data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <AccordionPrimitive.Content className="px-4 py-3 text-gray-700 border-t border-gray-200">
      {children}
    </AccordionPrimitive.Content>
  );
}
