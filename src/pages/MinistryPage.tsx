import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Calendar, Users, BookOpen, Heart, ArrowRight, Star, Clock } from "lucide-react";

const ministryData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  details: string[];
  schedule: string;
  icon: typeof Users;
  features: { title: string; description: string }[];
}> = {
  "wwwe-experience": {
    name: "WWWE Experience Program",
    tagline: "Our Annual Major Gathering",
    description: "The WWWE Experience Program is our flagship annual gathering that brings together believers from across the globe for an unforgettable encounter with God's presence.",
    details: [
      "Multiple days of powerful worship and teachings",
      "International speakers and ministers",
      "Worship sessions led by anointed ministers",
      "Networking with believers from around the world",
      "Life-transforming encounters with the Holy Spirit",
    ],
    schedule: "Annually (Check for upcoming dates)",
    icon: Users,
    features: [
      { title: "Powerful Worship", description: "Experience worship that transcends the ordinary" },
      { title: "Anointed Teachings", description: "Learn from experienced ministers of the Gospel" },
      { title: "Divine Encounters", description: "Position yourself for supernatural experiences" },
    ],
  },
  "young-ministers-clinic": {
    name: "Young Ministers' Clinic",
    tagline: "Training the Next Generation",
    description: "The Young Ministers' Clinic is a quarterly program designed to train and equip young ministers from all denominations in the art of ministry.",
    details: [
      "Open to ministers from all denominations",
      "Practical ministry training and mentorship",
      "Sessions on sermon preparation and delivery",
      "Leadership development workshops",
      "One-on-one mentoring opportunities",
    ],
    schedule: "Every 3-4 months",
    icon: BookOpen,
    features: [
      { title: "Practical Training", description: "Hands-on ministry skills development" },
      { title: "Expert Mentors", description: "Learn from seasoned ministers" },
      { title: "Networking", description: "Connect with fellow young ministers" },
    ],
  },
  "new-wine-bootcamp": {
    name: "New Wine Bootcamp",
    tagline: "Intensive Spiritual Training",
    description: "The New Wine Bootcamp is a 2-week intensive spiritual program designed for deep transformation and spiritual growth.",
    details: [
      "2 weeks of intensive spiritual training",
      "Daily teachings and prayer sessions",
      "Personal mentoring and counseling",
      "Spiritual disciplines and practices",
      "Character development focus",
    ],
    schedule: "2-week intensive program",
    icon: Heart,
    features: [
      { title: "Deep Transformation", description: "Experience lasting spiritual change" },
      { title: "Intensive Training", description: "Two weeks of focused spiritual development" },
      { title: "Personal Mentoring", description: "One-on-one guidance and support" },
    ],
  },
};

const MinistryPage = () => {
  const { ministryId } = useParams();
  const ministry = ministryData[ministryId || ""];

  if (!ministry) {
    return (
      <Layout>
        <section className="section-padding bg-cream min-h-[60vh] flex items-center">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-heading text-4xl text-midnight mb-4">Ministry Not Found</h1>
            <p className="text-muted-foreground mb-8">The ministry you're looking for doesn't exist.</p>
            <Button asChild variant="default">
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const IconComponent = ministry.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-custom mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 animate-fade-up">
            <IconComponent className="w-10 h-10 text-gold" />
          </div>
          <span className="text-gold font-medium uppercase tracking-wider text-sm animate-fade-up">
            Our Ministries
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mt-4 mb-6 animate-fade-up stagger-1">
            {ministry.name}
          </h1>
          <p className="text-cream/70 text-xl italic animate-fade-up stagger-2">
            {ministry.tagline}
          </p>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-midnight mb-6">About This Ministry</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {ministry.description}
            </p>
            
            <div className="bg-card rounded-xl p-6 shadow-md mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gold" />
                <h3 className="font-heading text-xl text-midnight">Schedule</h3>
              </div>
              <p className="text-muted-foreground">{ministry.schedule}</p>
            </div>

            <h3 className="font-heading text-2xl text-midnight mb-4">What to Expect</h3>
            <ul className="space-y-3">
              {ministry.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-midnight">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-cream">
              Why Join <span className="text-gold">This Ministry</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ministry.features.map((feature) => (
              <div
                key={feature.title}
                className="bg-midnight-light border border-midnight-lighter rounded-xl p-6 text-center card-hover"
              >
                <h3 className="font-heading text-xl text-gold mb-3">{feature.title}</h3>
                <p className="text-cream/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-burgundy">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            Register now to be part of our next {ministry.name}. Don't miss this life-changing opportunity!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MinistryPage;
