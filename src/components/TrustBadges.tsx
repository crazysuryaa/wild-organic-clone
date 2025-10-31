import { Shield, Award, Leaf, Heart } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "USDA Certified Organic",
      description: "100% organic ingredients"
    },
    {
      icon: Award,
      title: "FairTrade Certified",
      description: "Sustainably sourced"
    },
    {
      icon: Leaf,
      title: "Non-GMO",
      description: "No genetic modification"
    },
    {
      icon: Heart,
      title: "Kosher Certified",
      description: "Highest quality standards"
    }
  ];

  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
