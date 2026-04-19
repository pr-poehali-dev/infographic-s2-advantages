import Icon from "@/components/ui/icon";

const logoUrl = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/bucket/99f4881a-ce8f-4bad-8bea-29beb2b5a91c.png";
const granuleImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/d0ce1f17-642f-4b2b-b29c-03f84e967421.jpg";
const autoImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/516e3281-8505-4a2a-a67b-12a109b0571b.jpg";
const restoreImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/da491448-794d-4581-8593-f58db09febbc.jpg";

const specs = [
  { label: "Размер фракции", value: "1,0 – 1,5 мм", unit: "", bar: 75 },
  { label: "Твёрдость по Моосу", value: "2,5 – 3,5", unit: "", bar: 35 },
  { label: "Плотность насыпная", value: "600 – 700", unit: "кг/м³", bar: 65 },
  { label: "Влажность", value: "≤ 12", unit: "%", bar: 12 },
  { label: "Свободный кремний", value: "0", unit: "%", bar: 0 },
  { label: "Переиспользование", value: "3+", unit: "цикл.", bar: 50 },
];

const benefits = [
  { icon: "Leaf", text: "Натуральный органический материал", color: "#4caf7d" },
  { icon: "Zap", text: "Не повреждает металл и лак", color: "#e8c547" },
  { icon: "Shield", text: "Без кремния — безопасен для дыхания", color: "#4a9eff" },
  { icon: "Recycle", text: "Многоразовый — 3+ цикла работы", color: "#4caf7d" },
];

const useCases = [
  { img: autoImage, title: "Автосервис", desc: "Снятие ЛКП без повреждения металла" },
  { img: restoreImage, title: "Реставрация", desc: "Мебель, антиквариат, дерево" },
  { img: granuleImage, title: "Авиация и ОПК", desc: "Очистка турбин и деталей" },
];

// special: red = Н.Новгород (производство/склад)
const mapCities = [
  { name: "Калининград", x: 10, y: 37, anchor: "start" as const, special: false },
  { name: "Мурманск", x: 48, y: 10, anchor: "middle" as const, special: false },
  { name: "СПб", x: 42, y: 24, anchor: "middle" as const, special: false },
  { name: "Москва", x: 68, y: 38, anchor: "middle" as const, main: true, special: false },
  { name: "Н.Новгород", x: 82, y: 36, anchor: "start" as const, special: true },
  { name: "Воронеж", x: 70, y: 50, anchor: "start" as const, special: false },
  { name: "Казань", x: 94, y: 33, anchor: "start" as const, special: false },
  { name: "Самара", x: 102, y: 44, anchor: "start" as const, special: false },
  { name: "Ростов", x: 60, y: 61, anchor: "middle" as const, special: false },
  { name: "Краснодар", x: 53, y: 69, anchor: "middle" as const, special: false },
  { name: "Пермь", x: 116, y: 28, anchor: "start" as const, special: false },
  { name: "Уфа", x: 114, y: 40, anchor: "start" as const, special: false },
  { name: "Екатеринбург", x: 124, y: 31, anchor: "start" as const, special: false },
  { name: "Челябинск", x: 122, y: 42, anchor: "start" as const, special: false },
  { name: "Омск", x: 136, y: 37, anchor: "start" as const, special: false },
  { name: "Новосибирск", x: 144, y: 44, anchor: "middle" as const, special: false },
  { name: "Красноярск", x: 155, y: 38, anchor: "middle" as const, special: false },
  { name: "Иркутск", x: 163, y: 47, anchor: "middle" as const, special: false },
  { name: "Хабаровск", x: 176, y: 54, anchor: "end" as const, special: false },
  { name: "Владивосток", x: 175, y: 66, anchor: "end" as const, special: false },
];

const Index = () => {
  return (
    <div style={{ background: "#050607", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "32px 16px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div style={{ width: "900px", maxWidth: "100%", aspectRatio: "3 / 4", background: "var(--s2-dark)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* BG */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${granuleImage})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.12) saturate(0.4)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(232,197,71,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.06) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "280px", height: "280px", background: "conic-gradient(from 45deg, rgba(232,197,71,0.16), transparent 40%)", clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "180px", height: "180px", background: "conic-gradient(from 225deg, rgba(76,175,125,0.1), transparent 40%)", clipPath: "polygon(0 100%, 0 0, 100% 100%)" }} />

        {/* КОНТЕНТ */}
        <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "32px 44px 24px" }}>

          {/* ШАПКА */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "22px" }}>
            <img src={logoUrl} alt="Shell Tech ABX" style={{ width: "80px", height: "80px", objectFit: "contain", borderRadius: "10px", background: "#000", padding: "5px" }} />
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "30px", fontWeight: 700, color: "var(--s2-text)", letterSpacing: "0.06em", lineHeight: 1 }}>
                SHELL TECH <span style={{ color: "var(--s2-accent)" }}>ABX</span>
              </div>
              <div style={{ fontSize: "12px", color: "var(--s2-text-dim)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "5px" }}>
                Абразив · Скорлупа грецкого ореха
              </div>
            </div>
          </div>

          {/* HERO */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "inline-block", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--s2-accent)", border: "1px solid var(--s2-accent)", padding: "4px 12px", background: "rgba(232,197,71,0.07)", marginBottom: "10px" }}>
              Фракция · 1,0 – 1,5 мм
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.4rem, 7vw, 4.6rem)", fontWeight: 700, lineHeight: 0.93, color: "var(--s2-text)", letterSpacing: "0.02em" }}>
              АБРАЗИВ
              <br />
              <span style={{ color: "var(--s2-accent)" }}>ОРЕХОВЫЙ S2</span>
            </div>
          </div>

          {/* ПРОДАЮЩИЙ */}
          <div style={{ background: "linear-gradient(135deg, rgba(76,175,125,0.16), rgba(76,175,125,0.04))", border: "1px solid rgba(76,175,125,0.38)", padding: "12px 18px", marginBottom: "16px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "#4caf7d" }} />
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 600, color: "#4caf7d", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "3px" }}>
              Экономия до 40% vs песок и корунд
            </div>
            <div style={{ fontSize: "12px", color: "var(--s2-text-dim)", lineHeight: 1.5 }}>
              Щадит поверхность · Не оставляет кремния · Работает 3+ цикла
            </div>
          </div>

          {/* ЦИФРЫ */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "rgba(232,197,71,0.15)", marginBottom: "16px" }}>
            {[
              { val: "1–1,5", unit: "мм", label: "Фракция" },
              { val: "2,5–3,5", unit: "Моос", label: "Твёрдость" },
              { val: "0%", unit: "", label: "Кремний" },
              { val: "3+", unit: "цикл.", label: "Ресурс" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "11px 8px", background: "rgba(10,12,14,0.9)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--s2-accent)", lineHeight: 1 }}>
                  {s.val}{s.unit && <span style={{ fontSize: "10px", color: "var(--s2-text-dim)", marginLeft: "2px" }}>{s.unit}</span>}
                </div>
                <div style={{ fontSize: "9px", color: "var(--s2-text-dim)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "3px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ПРИМЕНЕНИЕ — фото */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "16px" }}>
            {useCases.map((uc, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", height: "190px" }}>
                <img src={uc.img} alt={uc.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.75)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,12,14,0.98) 0%, rgba(10,12,14,0.1) 50%, transparent 100%)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: i === 0 ? "#e8c547" : i === 1 ? "#4caf7d" : "#4a9eff" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 600, color: "var(--s2-text)", letterSpacing: "0.04em", marginBottom: "4px" }}>{uc.title}</div>
                  <div style={{ fontSize: "11px", color: "var(--s2-text-dim)", lineHeight: 1.4 }}>{uc.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--s2-accent)", marginBottom: "10px" }}>
              Ключевые преимущества
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px" }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", background: "rgba(255,255,255,0.03)", border: `1px solid ${b.color}22` }}>
                  <Icon name={b.icon} fallback="Circle" size={15} style={{ color: b.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "var(--s2-text-dim)", lineHeight: 1.35 }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ */}
          <div style={{ marginBottom: "14px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--s2-accent)", marginBottom: "10px" }}>
              Технические характеристики
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 24px" }}>
              {specs.map((spec, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3px" }}>
                    <span style={{ fontSize: "11px", color: "var(--s2-text-dim)" }}>{spec.label}</span>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--s2-text)" }}>
                      {spec.value}{spec.unit && <span style={{ fontSize: "10px", color: "var(--s2-text-dim)", marginLeft: "2px" }}>{spec.unit}</span>}
                    </span>
                  </div>
                  <div style={{ height: "2px", background: "rgba(255,255,255,0.06)" }}>
                    <div style={{ height: "2px", width: `${Math.max(spec.bar, 3)}%`, background: spec.bar === 0 ? "#4caf7d" : "linear-gradient(to right, #e8c547, #c9a832)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ГЕОГРАФИЯ — полноширинная без padding, до самого края */}
          <div style={{ marginLeft: "-44px", marginRight: "-44px", background: "rgba(74,158,255,0.05)", borderTop: "1px solid rgba(74,158,255,0.18)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 44px 4px" }}>
              <Icon name="MapPin" fallback="Circle" size={12} style={{ color: "#4a9eff" }} />
              <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#4a9eff", fontWeight: 600 }}>
                География поставок
              </div>
              <div style={{ flex: 1, height: "1px", background: "rgba(74,158,255,0.2)" }} />
              <div style={{ fontSize: "10px", color: "var(--s2-text-dim)" }}>вся Россия · от производителя</div>
            </div>

            {/* SVG карта — максимальная высота */}
            <div style={{ width: "100%", height: "240px" }}>
              <svg viewBox="0 0 200 78" style={{ width: "100%", height: "100%", display: "block" }} preserveAspectRatio="xMidYMid meet">

                {/* Контур России */}
                <path
                  d="M14,30 L20,24 L28,20 L36,17 L44,16 L52,14 L60,13 L68,14 L76,13 L86,14 L96,13 L108,15 L118,16 L128,17 L138,18 L148,20 L158,22 L166,25 L174,28 L180,32 L184,37 L186,43 L184,49 L180,54 L176,58 L178,64 L174,70 L166,73 L156,74 L148,72 L142,76 L134,76 L124,74 L116,76 L108,74 L98,76 L88,74 L78,72 L68,70 L58,68 L50,66 L44,68 L36,70 L28,68 L22,64 L18,58 L14,52 L12,44 L12,38 Z"
                  fill="rgba(74,158,255,0.09)"
                  stroke="rgba(74,158,255,0.32)"
                  strokeWidth="0.6"
                />
                <path d="M178,52 L182,56 L185,62 L184,68 L180,70 L178,64 Z" fill="rgba(74,158,255,0.05)" stroke="rgba(74,158,255,0.2)" strokeWidth="0.5" />
                <rect x="7" y="37" width="5" height="4" rx="0.5" fill="rgba(74,158,255,0.1)" stroke="rgba(74,158,255,0.28)" strokeWidth="0.5" />

                {/* Линии поставок из Москвы (68,38) */}
                {mapCities.filter(c => !c.main).map((city, i) => (
                  <line key={i} x1="68" y1="38"
                    x2={city.x} y2={city.y}
                    stroke={city.special ? "rgba(229,57,53,0.35)" : "rgba(74,158,255,0.2)"}
                    strokeWidth={city.special ? "1" : "0.6"}
                    strokeDasharray={city.special ? "none" : "2.5 2"}
                  />
                ))}

                {/* Города */}
                {mapCities.map((city, i) => {
                  const isMain = !!city.main;
                  const isSpecial = city.special;
                  const dotColor = isMain ? "#e8c547" : isSpecial ? "#e53935" : "#4a9eff";
                  const textColor = isMain ? "#e8c547" : isSpecial ? "#ff6b6b" : "rgba(240,242,245,0.84)";
                  const dotR = isMain ? 2 : isSpecial ? 1.8 : 1.3;

                  return (
                    <g key={i}>
                      {isMain && <circle cx={city.x} cy={city.y} r={4.5} fill="rgba(232,197,71,0.18)" />}
                      {isMain && <circle cx={city.x} cy={city.y} r={6} fill="none" stroke="rgba(232,197,71,0.28)" strokeWidth="0.6" />}
                      {isSpecial && <circle cx={city.x} cy={city.y} r={3.5} fill="rgba(229,57,53,0.15)" />}
                      <circle cx={city.x} cy={city.y} r={dotR} fill={dotColor} opacity={0.95} />
                      <text
                        x={city.x}
                        y={city.y - 3.5}
                        fontSize={isMain ? "5" : isSpecial ? "4.5" : "3.8"}
                        fill={textColor}
                        textAnchor={city.anchor}
                        fontFamily="'IBM Plex Sans', sans-serif"
                        fontWeight={isMain || isSpecial ? "700" : "400"}
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}

                {/* Стрелка "Производство" к Н.Новгороду (82,36) — выноска сверху-справа */}
                <defs>
                  <marker id="arrowRed" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                    <path d="M0,0 L4,2 L0,4 Z" fill="#e53935" />
                  </marker>
                </defs>
                <line x1="96" y1="22" x2="83.5" y2="33.5"
                  stroke="#e53935" strokeWidth="0.8"
                  markerEnd="url(#arrowRed)"
                />
                <text x="98" y="20" fontSize="3.8" fill="#ff6b6b" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="700" textAnchor="start">
                  ПРОИЗВОДСТВО
                </text>
              </svg>
            </div>
          </div>

        </div>

        {/* ФУТЕР */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 44px", borderTop: "1px solid rgba(232,197,71,0.12)", background: "rgba(10,12,14,0.7)" }}>
          <div style={{ fontSize: "10px", color: "var(--s2-text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            shelltechabx.ru · info@shelltechabx.ru
          </div>
          <img src={logoUrl} alt="Shell Tech ABX" style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "6px", background: "#000", padding: "3px", opacity: 0.85 }} />
        </div>
      </div>
    </div>
  );
};

export default Index;