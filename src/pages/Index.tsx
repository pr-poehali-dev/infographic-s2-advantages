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

const useCases = [
  { img: autoImage, title: "Автосервис", desc: "Снятие ЛКП без повреждения металла" },
  { img: restoreImage, title: "Реставрация", desc: "Мебель, антиквариат, дерево" },
  { img: granuleImage, title: "Авиация и ОПК", desc: "Очистка турбин и деталей" },
];

// Города с условными координатами для SVG-карты (% от ширины/высоты)
const cities = [
  { name: "СПб", x: 30, y: 14 },
  { name: "Москва", x: 36, y: 22 },
  { name: "Казань", x: 50, y: 24 },
  { name: "Н. Новгород", x: 45, y: 22 },
  { name: "Уфа", x: 58, y: 28 },
  { name: "Екатеринбург", x: 64, y: 26 },
  { name: "Воронеж", x: 38, y: 30 },
  { name: "Ростов", x: 38, y: 40 },
  { name: "Краснодар", x: 34, y: 43 },
  { name: "Самара", x: 53, y: 33 },
  { name: "Новосибирск", x: 72, y: 34 },
  { name: "Владивосток", x: 93, y: 48 },
];

const Index = () => {
  return (
    <div
      style={{
        background: "#050607",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "32px 16px",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: "900px",
          maxWidth: "100%",
          aspectRatio: "3 / 4",
          background: "var(--s2-dark)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* BG фото */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${granuleImage})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.12) saturate(0.4)" }} />
        {/* Сетка */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(232,197,71,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.06) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        {/* Угловые акценты */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "280px", height: "280px", background: "conic-gradient(from 45deg, rgba(232,197,71,0.16), transparent 40%)", clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "180px", height: "180px", background: "conic-gradient(from 225deg, rgba(76,175,125,0.1), transparent 40%)", clipPath: "polygon(0 100%, 0 0, 100% 100%)" }} />

        {/* КОНТЕНТ */}
        <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "36px 44px 28px" }}>

          {/* ШАПКА */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
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
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "inline-block", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--s2-accent)", border: "1px solid var(--s2-accent)", padding: "4px 12px", background: "rgba(232,197,71,0.07)", marginBottom: "12px" }}>
              Фракция · 1,0 – 1,5 мм
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.6rem, 7.5vw, 5rem)", fontWeight: 700, lineHeight: 0.93, color: "var(--s2-text)", letterSpacing: "0.02em" }}>
              АБРАЗИВ
              <br />
              <span style={{ color: "var(--s2-accent)" }}>ОРЕХОВЫЙ S2</span>
            </div>
          </div>

          {/* ПРОДАЮЩИЙ */}
          <div style={{ background: "linear-gradient(135deg, rgba(76,175,125,0.16), rgba(76,175,125,0.04))", border: "1px solid rgba(76,175,125,0.38)", padding: "14px 18px", marginBottom: "20px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "#4caf7d" }} />
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 600, color: "#4caf7d", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
              Экономия до 40% vs песок и корунд
            </div>
            <div style={{ fontSize: "12px", color: "var(--s2-text-dim)", lineHeight: 1.5 }}>
              Щадит поверхность · Не оставляет кремния · Работает 3+ цикла
            </div>
          </div>

          {/* ЦИФРЫ */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "rgba(232,197,71,0.15)", marginBottom: "18px" }}>
            {[
              { val: "1–1,5", unit: "мм", label: "Фракция" },
              { val: "2,5–3,5", unit: "Моос", label: "Твёрдость" },
              { val: "0%", unit: "", label: "Кремний" },
              { val: "3+", unit: "цикл.", label: "Ресурс" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "12px 8px", background: "rgba(10,12,14,0.9)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "19px", fontWeight: 700, color: "var(--s2-accent)", lineHeight: 1 }}>
                  {s.val}{s.unit && <span style={{ fontSize: "10px", color: "var(--s2-text-dim)", marginLeft: "2px" }}>{s.unit}</span>}
                </div>
                <div style={{ fontSize: "9px", color: "var(--s2-text-dim)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "3px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ПРИМЕНЕНИЕ — крупные фото */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "18px" }}>
            {useCases.map((uc, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", height: "230px" }}>
                <img src={uc.img} alt={uc.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.75)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,12,14,0.98) 0%, rgba(10,12,14,0.15) 50%, transparent 100%)" }} />
                {/* Accent line top */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: i === 0 ? "#e8c547" : i === 1 ? "#4caf7d" : "#4a9eff" }} />
                <div style={{ position: "absolute", bottom: "14px", left: "14px", right: "14px" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 600, color: "var(--s2-text)", letterSpacing: "0.04em", marginBottom: "5px" }}>{uc.title}</div>
                  <div style={{ fontSize: "11px", color: "var(--s2-text-dim)", lineHeight: 1.4 }}>{uc.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--s2-accent)", marginBottom: "10px" }}>
              Технические характеристики
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 24px" }}>
              {specs.map((spec, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3px" }}>
                    <span style={{ fontSize: "10px", color: "var(--s2-text-dim)" }}>{spec.label}</span>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "12px", fontWeight: 600, color: "var(--s2-text)" }}>
                      {spec.value}{spec.unit && <span style={{ fontSize: "9px", color: "var(--s2-text-dim)", marginLeft: "2px" }}>{spec.unit}</span>}
                    </span>
                  </div>
                  <div style={{ height: "2px", background: "rgba(255,255,255,0.06)" }}>
                    <div style={{ height: "2px", width: `${Math.max(spec.bar, 3)}%`, background: spec.bar === 0 ? "#4caf7d" : "linear-gradient(to right, #e8c547, #c9a832)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ГЕОГРАФИЯ — полноширинная SVG-карта */}
          <div style={{ marginBottom: "16px", marginLeft: "-44px", marginRight: "-44px", background: "rgba(74,158,255,0.05)", borderTop: "1px solid rgba(74,158,255,0.18)", borderBottom: "1px solid rgba(74,158,255,0.18)", position: "relative" }}>
            {/* Заголовок */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 44px 0" }}>
              <Icon name="MapPin" fallback="Circle" size={12} style={{ color: "#4a9eff" }} />
              <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a9eff", fontWeight: 600 }}>
                География поставок
              </div>
              <div style={{ flex: 1, height: "1px", background: "rgba(74,158,255,0.2)" }} />
              <div style={{ fontSize: "10px", color: "var(--s2-text-dim)" }}>вся Россия · от производителя</div>
            </div>

            {/* SVG карта — на всю ширину */}
            <div style={{ width: "100%", height: "148px", position: "relative" }}>
              <svg
                viewBox="0 0 200 90"
                style={{ width: "100%", height: "100%", display: "block" }}
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Фоновая заливка-подсказка */}
                <rect x="0" y="0" width="200" height="90" fill="transparent" />

                {/* Схематичный контур России (увеличенный viewBox 0-200) */}
                <path
                  d="M14,30 L20,24 L28,20 L36,17 L44,16 L52,14 L60,13 L68,14 L76,13 L86,14 L96,13 L108,15 L118,16 L128,17 L138,18 L148,20 L158,22 L166,25 L174,28 L180,32 L184,37 L186,43 L184,49 L180,54 L176,58 L178,64 L174,70 L166,73 L156,74 L148,72 L142,76 L134,78 L124,76 L116,78 L108,76 L98,78 L88,76 L78,74 L68,72 L58,70 L50,68 L44,70 L36,72 L28,70 L22,66 L18,60 L14,54 L12,46 L12,38 Z"
                  fill="rgba(74,158,255,0.07)"
                  stroke="rgba(74,158,255,0.28)"
                  strokeWidth="0.8"
                />

                {/* Полуостров Камчатка */}
                <path d="M178,52 L182,56 L185,62 L184,68 L180,70 L178,64 Z" fill="rgba(74,158,255,0.05)" stroke="rgba(74,158,255,0.2)" strokeWidth="0.6" />

                {/* Калининград */}
                <rect x="8" y="38" width="4" height="3" rx="0.5" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.25)" strokeWidth="0.5" />

                {/* Линии поставок из Москвы (x=68,y=38) */}
                {[
                  { x: 42, y: 26 }, { x: 56, y: 44 }, { x: 52, y: 52 },
                  { x: 80, y: 40 }, { x: 92, y: 36 }, { x: 100, y: 44 },
                  { x: 116, y: 42 }, { x: 140, y: 46 }, { x: 172, y: 64 },
                  { x: 10, y: 40 }, { x: 30, y: 56 }, { x: 26, y: 64 },
                ].map((pt, i) => (
                  <line key={i} x1="68" y1="38" x2={pt.x} y2={pt.y}
                    stroke="rgba(74,158,255,0.18)" strokeWidth="0.6" strokeDasharray="2.5 2" />
                ))}

                {/* Города */}
                {[
                  { name: "Калининград", x: 10, y: 37, anchor: "start" },
                  { name: "СПб", x: 42, y: 24, anchor: "middle" },
                  { name: "Москва", x: 68, y: 38, anchor: "middle", main: true },
                  { name: "Н.Новгород", x: 80, y: 36, anchor: "start" },
                  { name: "Воронеж", x: 70, y: 49, anchor: "start" },
                  { name: "Казань", x: 92, y: 34, anchor: "start" },
                  { name: "Самара", x: 100, y: 44, anchor: "start" },
                  { name: "Ростов", x: 60, y: 60, anchor: "middle" },
                  { name: "Краснодар", x: 54, y: 68, anchor: "middle" },
                  { name: "Уфа", x: 112, y: 40, anchor: "start" },
                  { name: "Екб", x: 122, y: 32, anchor: "start" },
                  { name: "Новосибирск", x: 142, y: 44, anchor: "middle" },
                  { name: "Владивосток", x: 174, y: 66, anchor: "end" },
                  { name: "Сахалин", x: 185, y: 55, anchor: "start" },
                ].map((city, i) => (
                  <g key={i}>
                    {city.main ? (
                      <>
                        <circle cx={city.x} cy={city.y} r={2.8} fill="rgba(232,197,71,0.2)" />
                        <circle cx={city.x} cy={city.y} r={1.8} fill="#e8c547" />
                        <circle cx={city.x} cy={city.y} r={4.5} fill="none" stroke="rgba(232,197,71,0.35)" strokeWidth="0.7" />
                      </>
                    ) : (
                      <circle cx={city.x} cy={city.y} r={1.4} fill="#4a9eff" opacity={0.85} />
                    )}
                    <text
                      x={city.x}
                      y={city.y - 3.2}
                      fontSize={city.main ? "4.5" : "3.5"}
                      fill={city.main ? "#e8c547" : "rgba(240,242,245,0.82)"}
                      textAnchor={city.anchor as "start" | "middle" | "end"}
                      fontFamily="'IBM Plex Sans', sans-serif"
                      fontWeight={city.main ? "700" : "400"}
                    >
                      {city.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* ФУТЕР */}
          <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "16px" }}>
            {/* Левый: лого */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={logoUrl} alt="Shell Tech ABX" style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "8px", background: "#000", padding: "4px" }} />
              <div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, color: "var(--s2-text)", letterSpacing: "0.06em", lineHeight: 1 }}>
                  SHELL TECH <span style={{ color: "var(--s2-accent)" }}>ABX</span>
                </div>
                <div style={{ fontSize: "10px", color: "var(--s2-text-dim)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>
                  Абразив · Россия
                </div>
              </div>
            </div>

            {/* Центр: год + производство */}
            <div style={{ textAlign: "center", padding: "0 16px" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "28px", fontWeight: 700, color: "var(--s2-accent)", lineHeight: 1, letterSpacing: "0.06em" }}>
                2025
              </div>
              <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--s2-text-dim)", marginTop: "5px", whiteSpace: "nowrap" }}>
                Собственное производство
              </div>
            </div>

            {/* Правый: сертификаты */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 600, color: "var(--s2-text-dim)", letterSpacing: "0.1em" }}>
                ГОСТ · ISO 9001
              </div>
              <div style={{ fontSize: "11px", color: "var(--s2-accent)", border: "1px solid rgba(232,197,71,0.35)", padding: "3px 10px", letterSpacing: "0.12em" }}>
                Сделано в России
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;