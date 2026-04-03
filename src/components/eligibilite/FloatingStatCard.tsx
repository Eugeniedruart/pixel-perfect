const FloatingStatCard = () => {
  return (
    <div className="absolute bottom-8 right-8 bg-primary rounded-xl p-6 text-primary-foreground max-w-[280px] shadow-lg">
      <p className="text-2xl font-bold font-serif-display italic mb-1">
        22,15 Mds€/an
      </p>
      <p className="text-sm opacity-90">
        C'est le coût des inégalités professionnelles femmes-hommes en France
      </p>
    </div>
  );
};

export default FloatingStatCard;
