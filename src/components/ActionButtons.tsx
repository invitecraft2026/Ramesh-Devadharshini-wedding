import { motion } from "framer-motion";
import { Calendar, Share2 } from "lucide-react";

const ActionButtons = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: "Arjun & Meera's Wedding",
      start: "20251215T090000",
      end: "20251215T103000",
      location: "Guruvayur Sri Krishna Temple, Kerala",
      details: "Wedding ceremony of Arjun and Meera",
    };
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.details)}`;
    window.open(url, "_blank");
  };

  const handleWhatsAppShare = () => {
    const message = "You are cordially invited to the wedding of Arjun & Meera on December 15, 2025 at Guruvayur Temple, Kerala. 🌸💍\n\nView invitation: " + window.location.href;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-sm mx-auto flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          onClick={handleAddToCalendar}
          className="flex items-center justify-center gap-3 gold-gradient text-primary-foreground font-heading text-lg py-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Calendar className="w-5 h-5" />
          Add to Calendar
        </motion.button>

        <motion.button
          onClick={handleWhatsAppShare}
          className="flex items-center justify-center gap-3 bg-accent text-accent-foreground font-heading text-lg py-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Share2 className="w-5 h-5" />
          Share on WhatsApp
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ActionButtons;
