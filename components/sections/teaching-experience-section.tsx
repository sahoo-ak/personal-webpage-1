import { teachingData } from "@/data/teaching"

export function TeachingExperienceSection() {
  return (
    <section
      id="teaching-experience"
      className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
        Teaching Experience
      </h2>

      <div className="space-y-10 max-w-4xl mx-auto">
        {teachingData.map((teaching, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-muted">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="text-xl font-bold">{teaching.title}</h3>
                <span className="text-sm text-muted-foreground">{teaching.period}</span>
              </div>
              <p className="font-medium">{teaching.company}</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                {teaching.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

