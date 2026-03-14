export function SoftBackground() {
  return (
    <div className="soft-background" aria-hidden="true">
      <div className="soft-background__haze soft-background__haze--top" />
      <div className="soft-background__haze soft-background__haze--side" />
      <div className="soft-background__plane soft-background__plane--one" />
      <div className="soft-background__plane soft-background__plane--two" />
      <div className="soft-background__grid" />
    </div>
  );
}
