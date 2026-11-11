const steps = [
  {
    id: 1,
    position: "bottom",
    title: "Discover & Define",
    desc: "We dive deep into your business, brand, audience, ambition, and gaps.",
  },
  {
    id: 2,
    position: "top",
    title: "Strategize & Position",
    desc: "We define positioning, audience, and define a roadmap for what you're building towards.",
  },
  {
    id: 3,
    position: "bottom",
    title: "Design",
    desc: "We build identity, spatial design, and materials tested, refined, and rebuilt.",
  },
  {
    id: 4,
    position: "top",
    title: "Experience & Activate",
    desc: "We launch the CX journey, digital presence, and brand into the market.",
  },
  {
    id: 5,
    position: "bottom",
    title: "Manage & Evolve",
    desc: "On-going brand management and portfolio evolution.",
  },
];

const Layer = () => {
  return (
    <section className="min-h-screen w-full bg-[#0e0e0e] p-6 text-white">
      {/* Header */}
      <div className="flex h-[30vh] w-full items-center justify-between">
        <div>
          <div className="flex gap-2">
            <img src="/images/logo.png" className="h-4 w-4" />
            <p>How we work</p>
          </div>
          <p className="text-6xl font-bold">One vision. Every layer.</p>
        </div>

        <p className="leading-none">
          Our process doesn't follow a straight line. Strategy shapes design.{" "}
          <br /> Space reshapes strategy. Every iteration sharpens the whole. We{" "}
          <br /> keep moving between layers until each one makes the others{" "}
          <br /> stronger.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-16 px-10">
        {/* 1) TOP ROW: only steps with position "top" show up */}
        <div className="grid h-[250px] grid-cols-5">
          {steps.map((step) =>
            step.position === "top" ? (
              <div
                key={step.id}
                className="flex flex-col items-center justify-end px-4 text-center"
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 mb-6 text-sm text-neutral-400">{step.desc}</p>
                <div className="flex size-12 items-center justify-center rounded-full bg-[#ff6f3c] text-neutral-900">
                  {step.id}
                </div>
                <div className="h-10 w-px bg-neutral-600" />
              </div>
            ) : (
              <div key={step.id} /> // empty cell keeps the column spacing
            )
          )}
        </div>

        {/* 2) THE LINE */}
        <div className="h-px bg-neutral-500" />

        {/* 3) BOTTOM ROW: only steps with position "bottom" show up */}
        <div className="grid grid-cols-5">
          {steps.map((step) =>
            step.position === "bottom" ? (
              <div
                key={step.id}
                className="flex flex-col items-center px-4 text-center"
              >
                <div className="h-10 w-px bg-neutral-600" />
                <div className="flex size-12 items-center justify-center rounded-full bg-[#ff6f3c] text-neutral-900">
                  {step.id}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{step.desc}</p>
              </div>
            ) : (
              <div key={step.id} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Layer;