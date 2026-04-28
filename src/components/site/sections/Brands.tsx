const brands = ["LG", "Samsung", "Whirlpool", "IFB", "Voltas", "Daikin", "Hitachi", "Godrej", "Bosch", "Bluestar", "Panasonic", "Haier"];

export function Brands() {
  return (
    <section className="border-y border-border bg-background py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Brands We Service
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-navy md:text-3xl">
            Authorised expertise for every major brand
          </h2>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="flex w-max gap-3 animate-marquee">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-border bg-gradient-card text-base font-display font-bold text-navy/80 shadow-soft transition hover:border-primary/40 hover:text-primary"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
