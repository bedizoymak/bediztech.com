import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const districts = [
  "Kadıköy", "Beşiktaş", "Şişli", "Üsküdar", "Ataşehir", 
  "Maltepe", "Kartal", "Pendik", "Bakırköy", "Beyoğlu",
  "Sarıyer", "Fatih", "Other / Diğer"
];

export const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoSubject = encodeURIComponent(`[Bediz Teknik] ${formData.service}`);
    const mailtoBody = encodeURIComponent(
      `${t.contact.form.name}: ${formData.name}\n${t.contact.form.phone}: ${formData.phone}\n${t.contact.form.email}: ${formData.email}\n${t.contact.form.service}: ${formData.service}\n${t.contact.form.location}: ${formData.location}\n\n${t.contact.form.message}:\n${formData.message}`
    );
    
    window.location.href = `mailto:hello@bediteknik.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    toast({
      title: "Opening email client...",
      description: "Please send the email. You can also reach out via WhatsApp.",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.contact.quickContact}</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/90XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">{t.contact.whatsapp}</div>
                    <div className="text-sm text-muted-foreground">{t.contact.fastestResponse}</div>
                  </div>
                </a>

                <a
                  href="tel:+90XXXXXXXXXX"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">{t.contact.phone}</div>
                    <div className="text-sm text-muted-foreground">+90 XXX XXX XX XX</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@bediteknik.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">{t.contact.email}</div>
                    <div className="text-sm text-muted-foreground">hello@bediteknik.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.serviceArea}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.contact.serviceAreaText}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium">{t.contact.availability}</div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {t.contact.availabilityText}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    {t.contact.form.name} *
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    {t.contact.form.phone} *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder={t.contact.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-card"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t.contact.form.service} *
                  </label>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="bg-card">
                      <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.contact.services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t.contact.form.location}
                  </label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                  >
                    <SelectTrigger className="bg-card">
                      <SelectValue placeholder={t.contact.form.locationPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  {t.contact.form.message} *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full glow" disabled={isSubmitting}>
                {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t.contact.form.privacy}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
