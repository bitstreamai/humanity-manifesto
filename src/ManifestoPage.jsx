import { motion } from 'framer-motion';

export default function ManifestoPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 py-16 text-center space-y-10"
    >
      <h1 className="text-5xl font-bold tracking-tight">Manifesto for the New Humanity</h1>
      <p className="text-xl text-muted-foreground">A Future Beyond Survival</p>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">The Premise</h2>
        <p>
          We stand at the edge of a global transformation. As artificial intelligence and automation reshape the world, we are told that the future belongs to the efficient, the optimized, the competitive. We reject that. We believe that the future belongs to the <strong>deeply human</strong>.
        </p>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p>
          For centuries, our worth has been measured by our labor: by how much we produce, how hard we hustle, and how well we compete. But as machines rise to perform the tasks we once called "work," a question echoes louder than ever: <em>What are humans for in a world that no longer needs their labor?</em> We embrace that question.
        </p>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">Our Belief</h2>
        <p>
          We believe that when humans are free from labor, they are free to <strong>love</strong>. When survival is no longer the goal, <strong>meaning</strong> becomes the path. When competition fades, <strong>connection and care</strong> take its place. We believe that <strong>consciousness is the next frontier</strong>—not artificial, but authentic.
        </p>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p>
          To build tools, systems, and spaces—powered by AI—that serve <strong>human flourishing</strong>, not human replacement. To use technology to heal, connect, and elevate purpose—not just profit.
        </p>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">Our Commitments</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Create technology that honors the soul, not just the algorithm.</li>
          <li>Facilitate empathy, not just efficiency.</li>
          <li>Support creativity, emotional intelligence, and authentic expression.</li>
          <li>Design for consciousness, not just productivity.</li>
        </ul>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">What We Will Build</h2>
        <p>
          We will build AI that mentors and mirrors your inner growth. Platforms that connect people through depth, not distraction. Communities where the currency is compassion—and the goal is awakening.
        </p>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">The Vision</h2>
        <p>
          A world where people are no longer defined by what they do to survive, but by how they help each other thrive. Where success is measured by alignment, not accumulation. Where automation frees us to become more whole, more present, and more connected.
        </p>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">The Invitation</h2>
        <p>
          To the dreamers, the builders, the healers, the quiet thinkers and loud rebels—if you believe that freedom is more than survival… that AI can be a tool for compassion… that the best of humanity is yet to come—then join us.
        </p>
        <p className="text-lg font-semibold italic">The work is ending. The becoming is beginning.</p>
      </section>
    </motion.div>
  );
}
