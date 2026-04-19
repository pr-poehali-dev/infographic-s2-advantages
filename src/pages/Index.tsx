import Icon from "@/components/ui/icon";

const granuleImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/d0ce1f17-642f-4b2b-b29c-03f84e967421.jpg";
const autoImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/516e3281-8505-4a2a-a67b-12a109b0571b.jpg";
const restoreImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/da491448-794d-4581-8593-f58db09febbc.jpg";

const advantages = [
  {
    icon: "Leaf",
    title: "Натуральное сырьё",
    desc: "Производится из скорлупы грецкого ореха. Полностью органический, биоразлагаемый материал.",
    color: "#4caf7d",
  },
  {
    icon: "Zap",
    title: "Щадящее воздействие",
    desc: "Не повреждает мягкие металлы, пластик и стекло. Идеален для деликатной очистки поверхностей.",
    color: "#e8c547",
  },
  {
    icon: "Layers",
    title: "Однородная фракция",
    desc: "Строгий диапазон 1–1,5 мм обеспечивает равномерную обработку без царапин и неровностей.",
    color: "#4a9eff",
  },
  {
    icon: "Shield",
    title: "Без пыли и токсинов",
    desc: "Не содержит свободного кремния. Безопасен для оператора и не требует спецзащиты органов дыхания.",
    color: "#4caf7d",
  },
  {
    icon: "Recycle",
    title: "Многократное использование",
    desc: "Гранулы сохраняют рабочие свойства после 3–5 циклов. Снижение расхода материала до 40%.",
    color: "#e8c547",
  },
  {
    icon: "Award",
    title: "Стабильное качество",
    desc: "Жёсткость по Моосу 3,5–4. Постоянный гранулометрический состав от партии к партии.",
    color: "#4a9eff",
  },
];

const specs = [
  { label: "Размер фракции", value: "1,0 – 1,5 мм", unit: "", bar: 75 },
  { label: "Твёрдость по Моосу", value: "3,5 – 4,0", unit: "", bar: 40 },
  { label: "Плотность насыпная", value: "600 – 700", unit: "кг/м³", bar: 65 },
  { label: "Влажность", value: "≤ 8", unit: "%", bar: 8 },
  { label: "Свободный кремний", value: "0", unit: "%", bar: 0 },
  { label: "Переиспользование", value: "3 – 5", unit: "цикл.", bar: 50 },
];

const useCases = [
  { img: autoImage, title: "Автосервис", desc: "Удаление ЛКП, ржавчины и старых покрытий без повреждения металла" },
  { img: restoreImage, title: "Реставрация", desc: "Мебель, антиквариат, деревянные и металлические изделия" },
  { img: granuleImage, title: "Авиация и ОПК", desc: "Очистка двигателей, лопаток турбин, деликатных деталей" },
];

const Index = () => {
  return (
    <div className="s2-page">
      {/* === HERO === */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${granuleImage})`, filter: "brightness(0.2) saturate(0.6)" }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10"
          style={{ background: "conic-gradient(from 45deg, #e8c547, transparent 40%)", clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64"
          style={{ background: "conic-gradient(from 225deg, #c8a96e, transparent 40%)", clipPath: "polygon(0 100%, 0 0, 100% 100%)", opacity: 0.1 }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(var(--s2-accent) 1px, transparent 1px), linear-gradient(90deg, var(--s2-accent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              left: `${10 + i * 11}%`,
              bottom: `${15 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.4}s`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="inline-flex items-center gap-3 mb-10 animate-fade-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
            <div
              className="w-10 h-10 flex items-center justify-center s2-glow"
              style={{ background: "var(--s2-accent)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <span className="s2-title font-bold text-sm" style={{ color: "var(--s2-dark)" }}>S2</span>
            </div>
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--s2-text-dim)" }}>
              Абразив · Скорлупа грецкого ореха
            </span>
          </div>

          <div className="animate-fade-up" style={{ opacity: 0, animationDelay: "0.25s" }}>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-6 border"
              style={{ color: "var(--s2-accent)", borderColor: "var(--s2-accent)", background: "rgba(232, 197, 71, 0.07)" }}
            >
              Фракция · 1,0 – 1,5 мм
            </div>
            <h1
              className="s2-title font-bold leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", color: "var(--s2-text)" }}
            >
              АБРАЗИВ
              <br />
              <span style={{ color: "var(--s2-accent)" }}>ОРЕХОВЫЙ S2</span>
            </h1>
            <p className="text-lg max-w-lg leading-relaxed" style={{ color: "var(--s2-text-dim)" }}>
              Натуральный абразив из скорлупы грецкого ореха для деликатной пескоструйной обработки.
              Автосервис, реставрация, авиация.
            </p>
          </div>

          <div
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px animate-fade-up"
            style={{ opacity: 0, background: "rgba(232, 197, 71, 0.15)", animationDelay: "0.45s" }}
          >
            {[
              { val: "1–1,5", unit: "мм", label: "Фракция" },
              { val: "3,5–4", unit: "Моос", label: "Твёрдость" },
              { val: "0%", unit: "", label: "Кремний" },
              { val: "5×", unit: "", label: "Циклов" },
            ].map((stat, i) => (
              <div key={i} className="px-6 py-5" style={{ background: "rgba(10,12,14,0.85)" }}>
                <div className="s2-title text-2xl font-bold" style={{ color: "var(--s2-accent)" }}>
                  {stat.val}
                  <span className="text-base ml-1" style={{ color: "var(--s2-text-dim)" }}>{stat.unit}</span>
                </div>
                <div className="text-xs mt-1 uppercase tracking-wider" style={{ color: "var(--s2-text-dim)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-xs tracking-widest uppercase" style={{ color: "var(--s2-text-dim)" }}>Листайте</div>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, var(--s2-accent), transparent)" }} />
        </div>
      </section>

      {/* === ADVANTAGES === */}
      <section className="py-24 diagonal-section" style={{ background: "var(--s2-charcoal)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--s2-accent)" }}>01 / Преимущества</div>
            <h2 className="s2-title text-5xl font-bold" style={{ color: "var(--s2-text)" }}>
              ПОЧЕМУ
              <br />
              <span style={{ color: "var(--s2-accent)" }}>ВЫБИРАЮТ S2</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((adv, i) => (
              <div key={i} className="s2-card rounded-none p-6 corner-accent">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{ background: `${adv.color}18`, border: `1px solid ${adv.color}40` }}
                >
                  <Icon name={adv.icon} fallback="Circle" size={20} style={{ color: adv.color }} />
                </div>
                <h3 className="s2-title font-semibold text-lg mb-2" style={{ color: "var(--s2-text)" }}>{adv.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--s2-text-dim)" }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SPECS === */}
      <section className="py-24" style={{ background: "var(--s2-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--s2-accent)" }}>02 / Характеристики</div>
              <h2 className="s2-title text-5xl font-bold mb-8" style={{ color: "var(--s2-text)" }}>
                ТЕХНИЧЕСКИЕ
                <br />
                <span style={{ color: "var(--s2-accent)" }}>ПАРАМЕТРЫ</span>
              </h2>

              <div className="p-8 mb-6" style={{ background: "var(--s2-steel)", border: "1px solid rgba(232,197,71,0.2)" }}>
                <div className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--s2-text-dim)" }}>
                  Визуализация размера гранулы
                </div>
                <div className="flex items-end gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full" style={{ width: "6px", height: "6px", background: "var(--s2-text-dim)" }} />
                    <div className="text-xs" style={{ color: "var(--s2-text-dim)" }}>0,5 мм</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="rounded-full s2-glow"
                      style={{ width: "18px", height: "18px", background: "radial-gradient(circle at 35% 35%, #c8a96e, #6b4c2a)", border: "2px solid var(--s2-accent)" }}
                    />
                    <div className="s2-title font-bold text-sm" style={{ color: "var(--s2-accent)" }}>S2</div>
                    <div className="text-xs" style={{ color: "var(--s2-text-dim)" }}>1–1,5 мм</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="rounded-full"
                      style={{ width: "30px", height: "30px", background: "rgba(255,255,255,0.05)", border: "1px dashed rgba(255,255,255,0.2)" }}
                    />
                    <div className="text-xs" style={{ color: "var(--s2-text-dim)" }}>3 мм</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 text-sm" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "var(--s2-text-dim)" }}>
                  Органический абразив. Твёрдость 3,5–4 по Моосу —{" "}
                  <span style={{ color: "var(--s2-text)" }}>мягче металла, но жёстче лака и ржавчины.</span>
                </div>
              </div>

              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img src={granuleImage} alt="Абразив из скорлупы ореха" className="w-full h-full object-cover" style={{ filter: "contrast(1.1) saturate(0.8)" }} />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, var(--s2-dark) 0%, transparent 30%, transparent 70%, var(--s2-dark) 100%)" }}
                />
                <div className="absolute bottom-4 right-4 text-xs tracking-widest uppercase" style={{ color: "var(--s2-accent)" }}>
                  Гранулы 1–1,5 мм
                </div>
              </div>
            </div>

            <div>
              {specs.map((spec, i) => (
                <div key={i} className="mb-7">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm" style={{ color: "var(--s2-text-dim)" }}>{spec.label}</span>
                    <span className="s2-title font-semibold text-lg" style={{ color: "var(--s2-text)" }}>
                      {spec.value}
                      {spec.unit && <span className="text-xs ml-1" style={{ color: "var(--s2-text-dim)" }}>{spec.unit}</span>}
                    </span>
                  </div>
                  <div className="h-1 w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-1 progress-bar-fill"
                      style={{
                        background: spec.bar === 0 ? "var(--s2-green)" : "linear-gradient(to right, var(--s2-accent), var(--s2-accent-dim))",
                        animationDelay: `${0.5 + i * 0.1}s`,
                        maxWidth: `${Math.max(spec.bar, 3)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === USE CASES === */}
      <section className="py-24 diagonal-section" style={{ background: "var(--s2-charcoal)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--s2-accent)" }}>03 / Применение</div>
            <h2 className="s2-title text-5xl font-bold" style={{ color: "var(--s2-text)" }}>
              ОБЛАСТИ
              <br />
              <span style={{ color: "var(--s2-accent)" }}>ПРИМЕНЕНИЯ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <div key={i} className="s2-card overflow-hidden" style={{ borderRadius: 0 }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={uc.img} alt={uc.title} className="w-full h-full object-cover" style={{ filter: "brightness(0.75) saturate(0.8)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,12,14,0.9) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <div className="s2-title font-bold text-lg" style={{ color: "var(--s2-text)" }}>{uc.title}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--s2-text-dim)" }}>{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-10 border-t" style={{ background: "var(--s2-dark)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ background: "var(--s2-accent)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
              <span className="s2-title font-bold text-xs" style={{ color: "var(--s2-dark)" }}>S2</span>
            </div>
            <div>
              <div className="s2-title font-semibold text-sm" style={{ color: "var(--s2-text)" }}>Абразив ореховый S2</div>
              <div className="text-xs" style={{ color: "var(--s2-text-dim)" }}>Скорлупа грецкого ореха · 1–1,5 мм</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-xs" style={{ color: "var(--s2-text-dim)" }}>ГОСТ · ISO 9001</div>
            <div className="text-xs px-3 py-1" style={{ color: "var(--s2-accent)", border: "1px solid rgba(232,197,71,0.3)" }}>
              Сделано в России
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
