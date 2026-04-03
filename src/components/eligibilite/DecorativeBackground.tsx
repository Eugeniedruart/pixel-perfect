import FloatingStatCard from "./FloatingStatCard";

type Corner = "tl" | "tr" | "bl" | "br";
type Color = "cream" | "lavender";

const borderRadiusMap: Record<Corner, string> = {
  tl: "100% 0 0 0",
  tr: "0 100% 0 0",
  bl: "0 0 0 100%",
  br: "0 0 100% 0",
};

const colorMap: Record<Color, string> = {
  cream: "hsl(var(--wel-cream-deep))",
  lavender: "hsl(var(--wel-blue-light))",
};

const Cell = ({ corner, color = "cream" }: { corner: Corner; color?: Color }) => (
  <div className="relative overflow-hidden aspect-square">
    <div
      className="absolute inset-0"
      style={{
        background: colorMap[color],
        borderRadius: borderRadiusMap[corner],
      }}
    />
  </div>
);

// Each row defines 4 cells: [corner, color?]
const rows: [Corner, Color?][][] = [
  [["br"], ["bl"], ["tl", "lavender"], ["br"]],
  [["tl"], ["bl", "lavender"], ["br"], ["tl"]],
  [["br"], ["tr"], ["tl"], ["bl"]],
  [["tl", "lavender"], ["tr"], ["bl"], ["br", "lavender"]],
  [["bl"], ["br", "lavender"], ["tl"], ["tr"]],
  [["tr"], ["tl"], ["br", "lavender"], ["bl"]],
  [["br"], ["bl"], ["tr"], ["tl"]],
  [["tl"], ["tr", "lavender"], ["bl"], ["br"]],
];

const DecorativeBackground = () => {
  return (
    <div className="relative h-full w-full bg-white/60 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4 auto-rows-fr">
        {rows.map((row, r) =>
          row.map(([corner, color], c) => (
            <Cell key={`${r}-${c}`} corner={corner} color={color ?? "cream"} />
          ))
        )}
      </div>
      <FloatingStatCard />
    </div>
  );
};

export default DecorativeBackground;
