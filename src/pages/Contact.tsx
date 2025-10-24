import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-champagne-gold" />,
    title: 'Address',
    value: '123 Cinematic Avenue, Hollywood, CA 90028',
  },
  {
    icon: <Mail className="w-6 h-6 text-champagne-gold" />,
    title: 'Email',
    value: 'contact@deamlab.com',
  },
  {
    icon: <Phone className="w-6 h-6 text-champagne-gold" />,
    title: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: <Clock className="w-6 h-6 text-champagne-gold" />,
    title: 'Working Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Contact Us" subtitle="Let's start a conversation about your next project." />
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Side: Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input id="name" type="text" placeholder="Your Name" required />
                <Input id="email" type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Input id="phone" type="tel" placeholder="Your Phone (Optional)" />
              </div>
              <div>
                <Textarea id="message" placeholder="Tell us about your project..." rows={6} required />
              </div>
              <Button type="submit" variant="primary" className="w-full md:w-auto">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Right Side: Info & Map */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">Our Studio</h2>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-text-secondary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden h-80 card-glow border border-border-color">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.663599438238!2d-118.3285353847841!3d34.07833898059901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8d6b1d1c0b1%3A0x1f2c2b6b7c6d7f0d!2sParamount%20Pictures!5e0!3m2!1sen!2sus!4v1678886"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert-[90%] brightness-90 contrast-125"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
