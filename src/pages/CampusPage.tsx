import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { MapPin, Calendar, Clock, ArrowRight, Navigation } from "lucide-react";

const campusData: Record<string, {
  name: string;
  fullName: string;
  location: string;
  address: string;
  services: { day: string; time: string }[];
  description: string;
}> = {
  "akwa-ibom-poly": {
    name: "Akwa Ibom State Polytechnic",
    fullName: "Kingdom Heralders - Akwa Ibom State Polytechnic Campus",
    location: "Ikot Osurua, Akwa Ibom",
    address: "Akwa Ibom State Polytechnic, Ikot Osurua, Akwa Ibom State",
    services: [
      { day: "Sunday", time: "8:00 AM - 10:30 AM" },
      { day: "Wednesday", time: "5:00 PM - 6:30 PM" },
    ],
    description: "Our campus fellowship at Akwa Ibom State Polytechnic is a vibrant community of young believers committed to academic excellence and spiritual growth.",
  },
  "university-of-uyo": {
    name: "University of Uyo",
    fullName: "Kingdom Heralders - University of Uyo Campus",
    location: "Uyo, Akwa Ibom",
    address: "University of Uyo Main Campus, Uyo, Akwa Ibom State",
    services: [
      { day: "Sunday", time: "7:30 AM - 10:00 AM" },
      { day: "Thursday", time: "5:00 PM - 7:00 PM" },
    ],
    description: "The University of Uyo campus is one of our largest fellowships, impacting hundreds of students with the Gospel message every week.",
  },
  "fua-ikot-abasi": {
    name: "Federal University of Agriculture",
    fullName: "Kingdom Heralders - FUA Ikot Abasi Campus",
    location: "Ikot Abasi, Akwa Ibom",
    address: "Federal University of Agriculture, Ikot Abasi, Akwa Ibom State",
    services: [
      { day: "Sunday", time: "8:00 AM - 10:30 AM" },
      { day: "Tuesday", time: "6:00 PM - 7:30 PM" },
    ],
    description: "Our FUA campus fellowship focuses on raising kingdom-minded agricultural professionals who will impact Nigeria's food security.",
  },
  "aksu-ikot-akpaden": {
    name: "Akwa Ibom State University",
    fullName: "Kingdom Heralders - AKSU Ikot Akpaden Campus",
    location: "Ikot Akpaden, Akwa Ibom",
    address: "Akwa Ibom State University, Ikot Akpaden, Akwa Ibom State",
    services: [
      { day: "Sunday", time: "7:30 AM - 10:00 AM" },
      { day: "Friday", time: "5:00 PM - 7:00 PM" },
    ],
    description: "AKSU campus fellowship is dedicated to nurturing future leaders who will excel in their chosen fields while walking in purpose.",
  },
  "bonny-island": {
    name: "Bonny Island Campus",
    fullName: "Kingdom Heralders - Bonny Island, Port Harcourt",
    location: "Port Harcourt, Rivers State",
    address: "Bonny Island, Port Harcourt, Rivers State",
    services: [
      { day: "Sunday", time: "9:00 AM - 11:30 AM" },
      { day: "Wednesday", time: "6:00 PM - 7:30 PM" },
    ],
    description: "Our Bonny Island location serves the oil and gas community, providing spiritual nourishment for professionals and their families.",
  },
};

const CampusPage = () => {
  const { campusId } = useParams();
  const campus = campusData[campusId || ""];

  if (!campus) {
    return (
      <Layout>
        <section className="section-padding bg-cream min-h-[60vh] flex items-center">
          <div className="container-custom mx-auto text-center">
            <h1 className="font-heading text-4xl text-midnight mb-4">Campus Not Found</h1>
            <p className="text-muted-foreground mb-8">The campus you're looking for doesn't exist.</p>
            <Button asChild variant="default">
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-custom mx-auto text-center">
          <span className="text-gold font-medium uppercase tracking-wider text-sm animate-fade-up">
            Campus Fellowship
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mt-4 mb-6 animate-fade-up stagger-1">
            {campus.name}
          </h1>
          <div className="flex items-center justify-center gap-2 text-cream/70 animate-fade-up stagger-2">
            <MapPin className="w-5 h-5 text-gold" />
            <span>{campus.location}</span>
          </div>
        </div>
      </section>

      {/* Campus Info */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl text-midnight mb-6">
                About This Campus
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {campus.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We invite you to join us for any of our services. Whether you're a first-timer 
                or have been walking with the Lord for years, there's a place for you in our 
                community. Experience the warmth of fellowship and the power of God's Word.
              </p>
            </div>
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-midnight mb-2">Address</h3>
                    <p className="text-muted-foreground">{campus.address}</p>
                  </div>
                </div>
              </div>

              {/* Service Times Card */}
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg text-midnight mb-3">Service Times</h3>
                    <div className="space-y-2">
                      {campus.services.map((service) => (
                        <div key={service.day} className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-gold" />
                          <span className="text-muted-foreground">
                            <strong className="text-midnight">{service.day}:</strong> {service.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl text-midnight mb-4">Get Directions</h2>
            <p className="text-muted-foreground">Find your way to our campus location</p>
          </div>
          <div className="h-80 rounded-2xl overflow-hidden shadow-xl bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Navigation className="w-12 h-12 mx-auto mb-4 text-gold" />
              <p>Google Map Embed Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-midnight">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">
            Plan Your Visit
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            We can't wait to meet you! Join us this Sunday for a life-changing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Contact This Campus
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

export default CampusPage;
