import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you work weekends?",
    answer: "Yes. I understand that many installations and visits need to happen outside business hours. Weekend availability is part of my service — just let me know your preferred time during the discovery call.",
  },
  {
    question: "Do you provide hardware?",
    answer: "I can either procure equipment on your behalf (with transparent pricing) or guide you on what to purchase. I work with major vendors and can help you find the best price-performance options for your budget.",
  },
  {
    question: "Can you do outdoor cameras?",
    answer: "Absolutely. I use weatherproof IP cameras rated for outdoor conditions. PoE (Power over Ethernet) simplifies installation and reduces failure points. I'll plan proper cable runs and weatherproofing.",
  },
  {
    question: "Do you support remote troubleshooting?",
    answer: "Yes. For many issues, I can diagnose and resolve problems remotely via secure screen sharing. This saves time and often means faster resolution. If on-site work is needed, I'll let you know.",
  },
  {
    question: "How fast can you start?",
    answer: "For urgent issues, I can often respond same-day or next-day. For larger projects, I typically schedule within a week after the discovery call and scope agreement. Rush jobs are possible with prior arrangement.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer: "Yes. For businesses that want ongoing support, I offer monthly retainer packages that include priority response, regular check-ups, and discounted rates on additional work. Details depend on your setup size.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions. Still curious? Just reach out.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
