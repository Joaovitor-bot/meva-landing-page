import "../styles/SpaceBackground.css";

export default function SpaceBackground() {
  return (
    <div
      className="space-background"
      aria-hidden="true"
    >
      {/* Subtle nebula lighting */}
      <div className="space-nebula" />

      {/* Distant stars — slow movement */}
      <div className="space-stars space-stars-far" />

      {/* Nearby stars — slightly faster movement */}
      <div className="space-stars space-stars-near" />
    </div>
  );
}
