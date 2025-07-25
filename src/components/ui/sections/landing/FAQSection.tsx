// components/landing/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../accordion";

export default function FAQSection() {
  return (
    <section className="py-20 px-6 min-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Got questions?{" "}
        <span className="font-bold text-cyan-700">We have the Answers.</span>
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>
            How do I import contacts into the CRM system?
          </AccordionTrigger>
          <AccordionContent>
            You can import contacts via CSV or directly integrate with external
            sources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Can I integrate third-party apps?</AccordionTrigger>
          <AccordionContent>
            Yes, Portal supports integrations with Slack, Gmail, Zapier, and
            more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>
            What security measures are in place?
          </AccordionTrigger>
          <AccordionContent>
            All data is encrypted in transit and at rest with full GDPR
            compliance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
