import { GraduationCap, Trophy, Award, Globe, Home } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Education() {
  const [educationRef, educationVisible] = useScrollAnimation();
  const [awardsRef, awardsVisible] = useScrollAnimation();
  const [languagesRef, languagesVisible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div
            ref={educationRef}
            className={`slide-in-left ${educationVisible ? "animate" : ""}`}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Education</h2>
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Bachelor of Engineering
                  </h3>
                  <a
                    className="text-secondary font-medium mb-1"
                    href={"https://kveg.in/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Karpaga Vinayaga College of Engineering and Technology
                  </a>
                  <p className="text-gray-600">2016 – 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div
            ref={awardsRef}
            className={`slide-in-right ${awardsVisible ? "animate" : ""}`}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">
              Awards & Recognition
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Best Performer of the Quarter
                    </h3>
                    <p className="text-yellow-700 font-medium">Foodhub</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Bonus Increment in 3 Months
                    </h3>
                    <p className="text-green-700 font-medium">
                      Sunrise Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div
          ref={languagesRef}
          className={`mt-12 fade-in ${languagesVisible ? "animate" : ""}`}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Languages
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                English
              </h3>
              <p className="text-gray-600">Professional</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Home className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Tamil</h3>
              <p className="text-gray-600">Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
