import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Building, Gift, Sparkles, Hammer, CreditCard, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const givingCategories = [
  { name: "Offering", icon: Heart, description: "Regular giving to support the ministry" },
  { name: "Tithe", icon: Gift, description: "Honor God with your first fruits" },
  { name: "Building Project", icon: Building, description: "Help us expand our facilities" },
  { name: "Equipment", icon: Hammer, description: "Support our technical ministry" },
  { name: "Special Seeds", icon: Sparkles, description: "Sow into special projects" },
];

const bankDetails = {
  bankName: "First Bank of Nigeria",
  accountName: "Kingdom Heralders Global Ministries",
  accountNumber: "1234567890",
};

const Give = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero section-padding">
        <div className="container-custom mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 animate-fade-up">
            <Heart className="w-10 h-10 text-gold" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6 animate-fade-up stagger-1">
            YOUR <span className="text-gold">PARTNERSHIP</span>, CHANGES LIVES
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto animate-fade-up stagger-2">
            God has given us a mandate to illuminate cities and awaken hearts across the earth. Your giving becomes part of that divine movement, fueling outreach, missions, discipleship, and the spread of the gospel to multitudes.
          </p>
        </div>
      </section>

      {/* Giving Categories */}
      <section className="section-padding bg-cream">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Ways to Give
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mt-2">
              Choose Your Giving Category
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {givingCategories.map((category) => (
              <div
                key={category.name}
                className="bg-card rounded-xl p-6 text-center shadow-md card-hover border-2 border-transparent hover:border-gold cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-lg text-midnight mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer */}
      <section className="section-padding bg-midnight">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">
                Bank Transfer
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-cream mt-2">
                Give via Bank Transfer
              </h2>
              <p className="text-cream/70 mt-4">
                You can give directly to our account using the details below
              </p>
            </div>

            <div className="bg-midnight-light border border-midnight-lighter rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-midnight rounded-lg">
                  <div>
                    <p className="text-cream/60 text-sm">Bank Name</p>
                    <p className="text-cream font-medium">{bankDetails.bankName}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gold hover:bg-gold/10"
                    onClick={() => copyToClipboard(bankDetails.bankName, "Bank Name")}
                  >
                    {copiedField === "Bank Name" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-midnight rounded-lg">
                  <div>
                    <p className="text-cream/60 text-sm">Account Name</p>
                    <p className="text-cream font-medium">{bankDetails.accountName}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gold hover:bg-gold/10"
                    onClick={() => copyToClipboard(bankDetails.accountName, "Account Name")}
                  >
                    {copiedField === "Account Name" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-midnight rounded-lg">
                  <div>
                    <p className="text-cream/60 text-sm">Account Number</p>
                    <p className="text-cream font-medium text-xl tracking-wider">
                      {bankDetails.accountNumber}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gold hover:bg-gold/10"
                    onClick={() => copyToClipboard(bankDetails.accountNumber, "Account Number")}
                  >
                    {copiedField === "Account Number" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Giving */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-midnight mb-4">
              Give Online
            </h2>
            <p className="text-muted-foreground mb-8">
              For convenient online giving, click the button below to access our secure giving portal.
            </p>
            <Button asChild variant="gold" size="xl">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Give Online Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="section-padding bg-burgundy">
        <div className="container-custom mx-auto text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-heading text-2xl md:text-3xl text-cream italic mb-4">
              "Each of you should give what you have decided in your heart to give, 
              not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <cite className="text-gold font-medium">— 2 Corinthians 9:7</cite>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Give;
