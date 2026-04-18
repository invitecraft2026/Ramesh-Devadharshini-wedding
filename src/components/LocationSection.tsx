import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-2">
          Venue
        </h2>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary/40" />
          <span className="text-primary">✿</span>
          <div className="h-px w-10 bg-primary/40" />
        </div>

        <div className="invitation-card rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.024!2d76.0398!3d10.5935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795e22e5ab3e3%3A0x4e4e4e4e4e4e4e4e!2sGuruvayur%20Temple!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          />
          <div className="p-5 text-left">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">
                  Guruvayur Sri Krishna Temple
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Guruvayur, Thrissur, Kerala 680101
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Guruvayur+Temple+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
