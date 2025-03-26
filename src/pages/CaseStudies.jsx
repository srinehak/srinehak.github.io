import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { CheckCircle, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesBackground from '../components/Particles';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Transforming Customer Support for a Scaling E-commerce Startup",
      client: "High-Growth E-commerce Retailer ($20M Annual Revenue)",
      industry: "E-commerce",
      challenge:
        "Rising customer support costs and inconsistent service quality, especially during sales peaks.",
      solution:
        "Deployed a multilingual AI Customer Support Agent powered by GPT-4, integrated with HubSpot CRM to handle Tier 1 & Tier 2 queries.",
      outcome: [
        "60% reduction in support costs within 5 months",
        "80% inquiries resolved autonomously",
        "25% improvement in customer satisfaction",
      ],
      testimonial: "\"Inceptica's AI solution scaled our customer support without extra hiring. We saw instant impact in efficiency and customer satisfaction.\" — COO, E-commerce Client",
    },
    {
      title: "Boosting Forecasting Accuracy for a Mid-Sized Manufacturer",
      client: "Mid-Sized Manufacturing Firm ($50M Annual Revenue)",
      industry: "Manufacturing",
      challenge:
        "Outdated spreadsheet-based forecasting causing overproduction, surplus inventory, and inefficiencies.",
      solution:
        "Implemented AI-powered Predictive Analytics integrating sales history and market data. Trained internal teams for independent management.",
      outcome: [
        "40% improvement in forecasting accuracy in 8 months",
        "20% reduction in inventory holding costs",
        "15% boost in production efficiency",
      ],
      testimonial: "\"The AI forecasting model revolutionized our planning process. We're now faster, leaner, and more profitable.\" — CFO, Manufacturing Client",
    },
    {
      title: "Automating Healthcare Admin Tasks for a Growing Clinic Network",
      client: "Multi-location Healthcare Startup (10+ Clinics)",
      industry: "Healthcare",
      challenge:
        "Manual appointment scheduling, insurance verification, and patient communications overloaded staff and led to no-shows.",
      solution:
        "Deployed a HIPAA-compliant AI Virtual Assistant integrated with EHR systems, automating key admin tasks and ensuring compliance.",
      outcome: [
        "70% decrease in no-shows within 4 months",
        "50% reduction in admin workload",
        "30% improvement in patient satisfaction",
      ],
      testimonial: "\"Our admin staff is finally free to focus on patient care, not paperwork. Patients are happier, and operations run smoothly.\" — CEO, Healthcare Client",
    },
    {
      title: "Tripling Sales Speed for a Fast-Growing TaaS Company",
      client: "Travel-as-a-Service Startup (Series B, 500+ Clients)",
      industry: "Travel & SaaS",
      challenge:
        "Manual lead qualification slowing sales cycles and burdening sales teams.",
      solution:
        "Built an AI Lead Qualification Agent integrated with Pipedrive CRM, analyzing leads via behavioral & engagement data.",
      outcome: [
        "3x faster lead qualification in 3 months",
        "35% increase in conversion rates",
        "50% more time spent on high-value leads",
      ],
      testimonial: "\"Inceptica's AI agent cut our sales cycle by a third. Our team focuses purely on closing deals now.\" — Head of Sales, TaaS Client",
    },
  ];

  return (
    <div className="min-h-screen bg-[#060B14]">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="text-5xl font-bold text-white inline-block relative mb-6"
          >
            Success Stories
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
            />
          </motion.h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover how our AI solutions have transformed businesses across industries
          </p>
        </motion.div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="space-y-6 pl-6 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#3B82F6]/30 hover:before:bg-gradient-to-b hover:before:from-[#3B82F6] hover:before:via-[#3B82F6]/80 hover:before:to-[#3B82F6]/40 before:transition-all before:duration-300">
                <div className="space-y-3">
                  <Badge className="bg-[#0A1628] text-[#3B82F6] px-3 py-1 rounded-full border border-[#3B82F6]/30 text-xs font-medium tracking-wide uppercase">
                    {cs.industry}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-[#3B82F6]">{cs.client}</p>
                </div>

                <div className="space-y-6 text-white/70">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Challenge</h4>
                    <p className="leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Solution</h4>
                    <p className="leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Outcome</h4>
                    <ul className="grid gap-2">
                      {cs.outcome.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <blockquote className="flex items-start gap-3 text-lg italic">
                      <Quote className="w-8 h-8 text-[#3B82F6] shrink-0 mt-1" />
                      <p>{cs.testimonial}</p>
                    </blockquote>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
