import { Reveal } from "@/components/Reveal";
import { STREFA_SCOPE } from "@/lib/productions";

export function ScopeGrid() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-page">
        <Reveal className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="eyebrow">04 / What Miotk Models designed</p>
          </div>
          <h2 className="max-w-[14ch] text-balance font-display text-[clamp(2.65rem,6vw,6rem)] font-normal leading-[0.95] tracking-[-0.035em]">
            The production was designed as a connected system.
          </h2>
        </Reveal>

        <div className="mt-16 grid border-t border-line md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {STREFA_SCOPE.map((item, index) => (
            <Reveal
              key={item.number}
              className={`min-h-[285px] border-b border-line py-7 md:px-7 lg:min-h-[330px] lg:px-9 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
            >
              <article className="flex h-full flex-col justify-between gap-12">
                <span className="font-sans text-[10px] font-light tracking-[0.2em] text-muted">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-normal leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-[38ch] font-sans text-[12px] font-light leading-[1.8] text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
