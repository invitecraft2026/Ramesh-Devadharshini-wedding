import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {

  function generateRandomDate() {
    const now = Date.now();
    const randomDays = Math.floor(Math.random() * 120) + 1; // 1–120 days
    return new Date(now + randomDays * 24 * 60 * 60 * 1000);
  }

  const [weddingDate] = useState(generateRandomDate());
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = weddingDate.getTime() - Date.now();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        className="text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
          Counting down to
        </p>

        <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-8">
          Our Special Day
        </h2>

        <div className="grid grid-cols-4 gap-3">
          {units.map((u) => (
            <div key={u.label} className="invitation-card p-4 rounded-xl">
              <p className="font-heading text-3xl sm:text-4xl font-bold gold-text">
                {String(u.value).padStart(2, "0")}
              </p>

              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {u.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;