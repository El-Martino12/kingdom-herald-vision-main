import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Download, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const sermons = [
  {
    id: 1,
    title: "Walking in Divine Purpose",
    date: "December 1, 2024",
    speaker: "Pastor John Doe",
    description: "Discover God's unique plan for your life and how to fulfill your calling. Learn the principles that will guide you into your divine destiny.",
    category: "Purpose",
  },
  {
    id: 2,
    title: "The Power of Kingdom Living",
    date: "November 24, 2024",
    speaker: "Pastor John Doe",
    description: "Understanding the principles of living as a citizen of God's Kingdom. Experience the abundant life that Jesus promised.",
    category: "Kingdom",
  },
  {
    id: 3,
    title: "Faith That Moves Mountains",
    date: "November 17, 2024",
    speaker: "Pastor Jane Smith",
    description: "Building unshakeable faith that conquers every obstacle in your path. Discover the secrets of victorious faith.",
    category: "Faith",
  },
  {
    id: 4,
    title: "The Heart of Worship",
    date: "November 10, 2024",
    speaker: "Pastor John Doe",
    description: "Learn what it means to worship God in spirit and in truth. Transform your worship experience forever.",
    category: "Worship",
  },
  {
    id: 5,
    title: "Breaking Generational Patterns",
    date: "November 3, 2024",
    speaker: "Pastor Jane Smith",
    description: "Freedom from inherited limitations and stepping into your God-given inheritance. Break free from the past.",
    category: "Freedom",
  },
  {
    id: 6,
    title: "The Ministry of Reconciliation",
    date: "October 27, 2024",
    speaker: "Pastor John Doe",
    description: "Understanding our role as ambassadors of Christ in bringing people back to God. Be equipped for effective evangelism.",
    category: "Evangelism",
  },
  {
    id: 7,
    title: "Living by the Spirit",
    date: "October 20, 2024",
    speaker: "Pastor Jane Smith",
    description: "How to be led by the Holy Spirit in every area of your life. Experience supernatural guidance daily.",
    category: "Holy Spirit",
  },
  {
    id: 8,
    title: "The Power of Prayer",
    date: "October 13, 2024",
    speaker: "Pastor John Doe",
    description: "Unlocking heaven's resources through effective prayer. Learn to pray prayers that get answered.",
    category: "Prayer",
  },
];

const Sermons = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSermons = sermons.filter(
    (sermon) =>
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 animate-fade-up">
            <span className="text-gold">Sermons</span> & Messages
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto animate-fade-up stagger-1">
            Listen to life-transforming messages from our services. Download and share with others.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-cream py-8 border-b border-border">
        <div className="container-custom mx-auto">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search sermons by title, speaker, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          {filteredSermons.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No sermons found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSermons.map((sermon) => (
                <div
                  key={sermon.id}
                  className="bg-card rounded-xl overflow-hidden shadow-md card-hover"
                >
                  <div className="h-44 bg-gradient-to-br from-midnight to-midnight-light flex items-center justify-center relative group">
                    <Play className="w-14 h-14 text-gold group-hover:scale-110 transition-transform" />
                    <span className="absolute top-4 right-4 bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-medium">
                      {sermon.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gold text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {sermon.date}
                    </div>
                    <h3 className="font-heading text-xl text-midnight mb-2">
                      {sermon.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      By {sermon.speaker}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {sermon.description}
                    </p>
                    <Button asChild variant="secondary" size="sm" className="w-full">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" />
                        Download on Telegram
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-midnight">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">
            Never Miss a Message
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Join our Telegram channel to receive sermons directly on your phone as soon as they're available.
          </p>
          <Button asChild variant="gold" size="lg">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Join Our Telegram Channel
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
