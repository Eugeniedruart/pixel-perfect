import FloatingStatCard from "./FloatingStatCard";

const DecorativeBackground = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-wel-cream/50 rounded-l-3xl">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-wel-cream-deep/60" />
      <div className="absolute top-16 -left-24 w-64 h-64 rounded-full bg-primary/20" />
      <div className="absolute top-8 right-16 w-48 h-48 rounded-full bg-wel-blue-light/70" />
      <div className="absolute top-48 right-0 w-72 h-72 rounded-full bg-wel-cream-deep/50" />
      <div className="absolute bottom-32 right-16 w-56 h-56 rounded-full bg-primary/15 overflow-hidden">
        <div className="absolute inset-0 bg-wel-blue-light/40" />
      </div>
      <div className="absolute bottom-48 left-8 w-32 h-32 rounded-full bg-wel-blue-light/50" />
      <div className="absolute -bottom-16 left-16 w-64 h-64 rounded-full bg-wel-cream-deep/40" />
      <FloatingStatCard />
    </div>
  );
};

export default DecorativeBackground;
