# Pixel Perfect

## Design System

### Color Palette (WEL Brand)

| Name         | Hex       | HSL              | Tailwind Class       |
|--------------|-----------|------------------|----------------------|
| Purple       | #6666D9   | 240 60% 63%      | `wel-purple`         |
| Navy         | #27276D   | 240 47% 29%      | `wel-navy`           |
| Blue         | #4141B5   | 240 47% 48%      | `wel-blue`           |
| Lavender     | #EAE6FC   | 251 79% 95%      | `wel-blue-light`     |
| Red          | #C52221   | 0 71% 45%        | `destructive`        |

Additional utility colors (cream, green) are defined in `src/index.css`.

### Primary/Accent

- `primary`, `accent`, and `ring` all use Purple (#6666D9).
- `destructive` uses Red (#C52221).

### Typography

- **Sans-serif**: Rethink Sans (body, headings)
- **Serif display**: Libre Caslon Text (`.font-serif-display`)

### Tech Stack

- React + TypeScript + Vite
- Tailwind CSS with CSS custom properties (HSL)
- shadcn/ui component library
- React Router
