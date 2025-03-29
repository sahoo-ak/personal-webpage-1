import { Card, CardContent } from "@/components/ui/card"
import { educationData } from "@/data/education"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="container py-24 sm:py-32 border-t max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">Education</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* PhD - Full width */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-24 flex-shrink-0 flex items-center justify-center">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{educationData[0].degree}</h3>
                <div className="grid gap-1">
                  <p className="font-medium">
                    {educationData[0].institution} ({educationData[0].period})
                  </p>
                  {educationData[0].gpa && <p className="text-muted-foreground">CGPA: {educationData[0].gpa}</p>}
                  {educationData[0].thesis && (
                    <p className="text-muted-foreground">
                      <span className="font-medium">Thesis:</span> "{educationData[0].thesis}"
                    </p>
                  )}
                  {educationData[0].supervisor && (
                    <p className="text-muted-foreground">
                      <span className="font-medium">Supervisor:</span> {educationData[0].supervisor}
                    </p>
                  )}
                  {educationData[0].fellowship && (
                    <p className="text-muted-foreground">
                      <span className="font-medium">Fellowship:</span> {educationData[0].fellowship}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MSc and BSc - 1x2 grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.slice(1).map((education, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center mb-2">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{education.degree}</h3>
                    <div className="grid gap-1">
                      <p className="font-medium">
                        {education.institution} ({education.period})
                      </p>
                      {education.gpa && <p className="text-muted-foreground">CGPA: {education.gpa}</p>}
                      {education.specialization && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Specialization:</span> {education.specialization}
                        </p>
                      )}
                      {education.advisor && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Advisor:</span> {education.advisor}
                        </p>
                      )}
                      {education.minor && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Minor:</span> {education.minor}
                        </p>
                      )}
                      {education.thesis && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Thesis:</span> "{education.thesis}"
                        </p>
                      )}
                      {education.supervisor && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Supervisor:</span> {education.supervisor}
                        </p>
                      )}
                      {education.honors && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Honors:</span> {education.honors}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

