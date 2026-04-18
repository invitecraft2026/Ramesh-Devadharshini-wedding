import { motion } from "framer-motion";

const GallerySection = () => {
  // Placeholder gallery - user can replace with real photos
  const photos = [
    { id: 1, emoji: "🌸", label: "Engagement" },
    { id: 2, emoji: "💍", label: "Ring Ceremony" },
    { id: 3, emoji: "🎊", label: "Haldi" },
    { id: 4, emoji: "🌺", label: "Mehendi" },
  ];

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
          Our Moments
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-10 bg-primary/40" />
          <span className="text-primary">✿</span>
          <div className="h-px w-10 bg-primary/40" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="invitation-card rounded-2xl aspect-square flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="text-4xl mb-3">{photo.emoji}</span>
              <p className="text-sm text-muted-foreground font-heading">
                {photo.label}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 italic">
          Replace with your real photos
        </p>
      </motion.div>
    </section>
  );
};

export default GallerySection;
