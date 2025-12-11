import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love",
    description: "We are driven by the unconditional love of God for all humanity.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Every believer has a divine purpose to fulfill in the Kingdom.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of fellowship and growing together.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We are committed to seeing a billion souls saved for Christ.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 animate-fade-up">
            About <span className="text-gold">Kingdom Heralders</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto animate-fade-up stagger-1">
            Learn about our mission, vision, and the heart behind our ministry.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mt-2 mb-6">
              A Ministry Born of Divine Vision
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Kingdom Heralders Global Ministries was established with a clear divine mandate: 
                to reach a billion souls in ten thousand cities with the transforming message of 
                the Gospel of Jesus Christ.
              </p>
              <p className="mb-4">
                What began as a small fellowship has grown into a vibrant ministry with multiple 
                campus locations across Nigeria, impacting the lives of students, young professionals, 
                and families alike.
              </p>
              <p>
                Our ministry is built on the foundation of sound biblical teaching, fervent prayer, 
                and a passion for souls. We believe that every person is called to fulfill a divine 
                purpose, and we are committed to equipping believers to walk in their God-given destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-midnight">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-midnight-light border border-midnight-lighter rounded-2xl p-8">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-2xl text-cream mb-4">Our Mission</h3>
              <p className="text-cream/70 leading-relaxed">
                To preach the Gospel of Jesus Christ with power and demonstration, equipping 
                believers to live purposeful lives and impact their generation for the Kingdom of God.
              </p>
            </div>
            <div className="bg-midnight-light border border-midnight-lighter rounded-2xl p-8">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-2xl text-cream mb-4">Our Vision</h3>
              <p className="text-cream/70 leading-relaxed">
                To reach a billion souls in ten thousand cities with the life-transforming 
                message of the Gospel, raising a generation of Kingdom ambassadors who will 
                turn the world upside down for Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              What We Believe
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 text-center shadow-md card-hover"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl text-midnight mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-burgundy">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">
            Join Our Community
          </h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            We'd love to welcome you into our family. Visit any of our campus locations 
            or reach out to learn more about our ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/campuses/akwa-ibom-poly">Find a Campus</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
