import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Calendar, Users, BookOpen, Heart, Church } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-worship.jpg";

const campuses = [
  {
    name: "Akwa Ibom State Polytechnic",
    location: "Ikot Osurua",
    path: "/campuses/akwa-ibom-poly",
  },
  {
    name: "University of Uyo",
    location: "Uyo, Akwa Ibom",
    path: "/campuses/university-of-uyo",
  },
  {
    name: "Federal University of Agriculture",
    location: "Ikot Abasi",
    path: "/campuses/fua-ikot-abasi",
  },
  {
    name: "Akwa Ibom State University",
    location: "Ikot Akpaden",
    path: "/campuses/aksu-ikot-akpaden",
  },
  {
    name: "Bonny Island Campus",
    location: "Port Harcourt",
    path: "/campuses/bonny-island",
  },
];

const ministries = [
  {
    name: "WWWE Experience Program",
    description: "Our annual major gathering bringing together believers from across the globe.",
    icon: Users,
    path: "/ministries/wwwe-experience",
  },
  {
    name: "Young Ministers' Clinic",
    description: "Training and equipping young ministers from all denominations every 3-4 months.",
    icon: BookOpen,
    path: "/ministries/young-ministers-clinic",
  },
  {
    name: "New Wine Bootcamp",
    description: "A 2-week intensive spiritual bootcamp for deep transformation.",
    icon: Heart,
    path: "/ministries/new-wine-bootcamp",
  },
];

const sermons = [
  {
    title: "Walking in Divine Purpose",
    date: "December 1, 2024",
    description: "Discover God's unique plan for your life and how to fulfill your calling.",
  },
  {
    title: "The Power of Kingdom Living",
    date: "November 24, 2024",
    description: "Understanding the principles of living as a citizen of God's Kingdom.",
  },
  {
    title: "Faith That Moves Mountains",
    date: "November 17, 2024",
    description: "Building unshakeable faith that conquers every obstacle in your path.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/60 to-midnight/90" />
        <div className="relative z-10 container-custom mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-cream mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gold">Kingdom Heralders</span>{" "}
              <span className="block">Global Ministries</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 mb-8 font-light italic">
              Reaching a Billion Souls in Ten Thousand Cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  <Calendar className="w-5 h-5" />
                  Join Us This Sunday
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/sermons">
                  <Play className="w-5 h-5" />
                  Watch Sermons
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-midnight mt-2 mb-6">
                A Ministry Born of{" "}
                <span className="text-burgundy">Divine Purpose</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kingdom Heralders Global Ministries is a Spirit-led movement dedicated to 
                transforming lives through the power of the Gospel. Founded on the principles 
                of faith, love, and service, we are committed to reaching souls across the 
                nations with the life-changing message of Jesus Christ.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our vision is bold yet simple: to reach a billion souls in ten thousand cities. 
                Through our various campuses, ministries, and outreach programs, we are building 
                a global community of believers who are equipped to impact their world.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/20 to-burgundy/20 p-8 flex items-center justify-center">
                <Church className="w-32 h-32 text-gold opacity-50" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-midnight text-cream p-6 rounded-xl shadow-xl">
                <span className="text-4xl font-heading font-bold text-gold">5+</span>
                <p className="text-sm text-cream/70">Campus Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="section-padding bg-midnight">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Our Locations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mt-2">
              Campus Fellowships
            </h2>
            <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
              Join us at any of our campus locations across Nigeria for life-transforming services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campuses.map((campus, index) => (
              <Link
                key={campus.name}
                to={campus.path}
                className="group bg-midnight-light border border-midnight-lighter rounded-xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl text-cream mb-2 group-hover:text-gold transition-colors">
                  {campus.name}
                </h3>
                <p className="text-cream/60 text-sm">{campus.location}</p>
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Campus <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Get Involved
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-midnight mt-2">
              Our Ministries
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <Link
                key={ministry.name}
                to={ministry.path}
                className="group bg-card rounded-2xl p-8 shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ministry.icon className="w-8 h-8 text-midnight" />
                </div>
                <h3 className="font-heading text-xl text-midnight mb-3 group-hover:text-burgundy transition-colors">
                  {ministry.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {ministry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-gold font-medium uppercase tracking-wider text-sm">
                Latest Messages
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-midnight mt-2">
                Recent Sermons
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/sermons">View All Sermons</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sermons.map((sermon, index) => (
              <div
                key={sermon.title}
                className="bg-card rounded-xl overflow-hidden shadow-md card-hover"
              >
                <div className="h-40 bg-gradient-to-br from-midnight to-midnight-light flex items-center justify-center">
                  <Play className="w-12 h-12 text-gold" />
                </div>
                <div className="p-6">
                  <span className="text-gold text-sm">{sermon.date}</span>
                  <h3 className="font-heading text-lg text-midnight mt-2 mb-3">
                    {sermon.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{sermon.description}</p>
                  <Button asChild variant="secondary" size="sm" className="w-full">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Download on Telegram
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Give Section */}
      <section className="section-padding bg-gradient-to-br from-midnight via-midnight-light to-midnight relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom mx-auto relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
            YOUR <span className="text-gold">PARTNERSHIP</span>, CHANGES LIVES
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            God has given us a mandate to illuminate cities and awaken hearts across the earth. Your giving becomes part of that divine movement, fueling outreach, missions, discipleship, and the spread of the gospel to multitudes.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/give">
              <Heart className="w-5 h-5" />
              Give Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-medium uppercase tracking-wider text-sm">
                Visit Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-midnight mt-2 mb-6">
                Our Main Location
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-midnight mb-1">Church Address</h3>
                  <p className="text-muted-foreground">
                    No. 1 Udoidiong Street, Ikot Okoro Road,
                    <br />
                    Obio Akpa, Oruk Anam
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-midnight mb-1">Service Times</h3>
                  <p className="text-muted-foreground">
                    Sunday Service: 8:00 AM - 11:00 AM
                    <br />
                    Monday Bible Study: 5:30 PM<br></br>
                    Friday Prayer Meeting: 5:30 PM
                  </p>
                </div>
              </div>
              <Button asChild variant="default" size="lg">
                <Link to="/contact">
                  Plan Your Visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-gold" />
                <p>Google Map Embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
