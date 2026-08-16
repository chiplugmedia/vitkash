const TASKS_ROW_1 = [
  "Digital Marketing",
  "Writing & Translation",
  "Programming & Tech",
  "Business",
  "Graphic Design",
  "Video & Animation",
  "Social Media",
  "AI Training",
  "Customer Support",
  "Virtual Assistant",
];

const TASKS_ROW_2 = [
  "Data Entry",
  "Lead Generation",
  "Website Testing",
  "App Testing",
  "Product Testing",
  "Voice Recording",
  "Gaming & Playtesting",
  "Content Moderation",
  "Forum Posting",
  "Mystery Shopping",
];

export default function TasksSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        

        {/* Marquee Row 1 */}
        <div className="relative mt-14 overflow-hidden w-full">
          <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />

          <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...TASKS_ROW_1, ...TASKS_ROW_1].map((task, i) => (
              <div
                key={i}
                className="
                  shrink-0
                  px-4
                  py-2.5
                  text-sm
                  rounded-full
                  bg-black
                  text-white
                  font-medium
                  border
                  border-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                  cursor-pointer
                "
              >
                {task}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="relative mt-4 overflow-hidden w-full">
          <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />

          <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap">
            {[...TASKS_ROW_2, ...TASKS_ROW_2].map((task, i) => (
              <div
                key={i}
                className="
                  shrink-0
                  px-4
                  py-2.5
                  text-sm
                  rounded-full
                  bg-white
                  border
                  border-black/10
                  text-black
                  font-medium
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  hover:-translate-y-1
                  cursor-pointer
                "
              >
                {task}
              </div>
            ))}
          </div>
        </div>

      
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .animate-marquee-reverse {
          width: max-content;
          animation: marqueeReverse 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
