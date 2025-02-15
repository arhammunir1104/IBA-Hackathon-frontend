import { motion } from "framer-motion";

const skillStories = [
  {
    name: "Emily Johnson",
    skill: "Graphic Design",
    story: "I started as a beginner, but SkillSwap helped me master Adobe Illustrator in just 3 months!",
    image: "https://img.freepik.com/free-photo/woman-retoucher-looking-camera-smiling-working-creative-media-agency-standing-front-webc_482257-3427.jpg?uid=R134167008&ga=GA1.1.1125223381.1739635940&semt=ais_hybrid", 
  },
  {
    name: "Mark Robinson",
    skill: "Web Development",
    story: "Through shared resources, I built my first React project and got my first freelance gig!",
    image: "https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?uid=R134167008&ga=GA1.1.1125223381.1739635940&semt=ais_hybrid",
  },
  {
    name: "Sophia Lee",
    skill: "Digital Marketing",
    story: "I connected with amazing mentors and learned SEO strategies that boosted my business!",
    image: "https://img.freepik.com/free-photo/close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home_176532-7908.jpg?uid=R134167008&ga=GA1.1.1125223381.1739635940&semt=ais_hybrid",
  },
];

export default function SkillStories() {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-12 lg:px-24 text-center">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-green-700"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skill Stories: Learn & Grow 🚀
      </motion.h2>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Real people, real success! See how SkillSwap has helped learners grow their skills.
      </p>

      {/* Cards Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillStories.map((story, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border border-green-300 text-left flex flex-col items-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-green-700">{story.name}</h3>
            <p className="text-green-600 text-sm font-medium">{story.skill}</p>
            <p className="text-gray-700 mt-2 text-center">"{story.story}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
