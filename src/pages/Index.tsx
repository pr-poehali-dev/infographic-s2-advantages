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

          {/* ГЕОГРАФИЯ — графическая SVG-карта */}
          <div style={{ marginBottom: "16px", background: "rgba(74,158,255,0.05)", border: "1px solid rgba(74,158,255,0.18)", padding: "12px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <Icon name="MapPin" fallback="Circle" size={12} style={{ color: "#4a9eff" }} />
              <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a9eff" }}>
                География поставок
              </div>
              <div style={{ flex: 1, height: "1px", background: "rgba(74,158,255,0.18)" }} />
              <div style={{ fontSize: "9px", color: "var(--s2-text-dim)" }}>вся Россия · от производителя</div>
            </div>

            {/* SVG схематичная карта России */}
            <div style={{ position: "relative", width: "100%", height: "90px" }}>
              <svg
                viewBox="0 0 100 55"
                style={{ width: "100%", height: "100%", display: "block" }}
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Схематичный контур России */}
                <path
                  d="M8,18 L12,14 L18,12 L24,10 L30,10 L34,8 L40,8 L46,9 L50,8 L56,9 L62,8 L68,10 L74,10 L80,12 L86,13 L90,15 L94,18 L96,22 L95,27 L93,30 L90,33 L92,37 L90,42 L86,45 L80,47 L74,48 L68,46 L64,50 L60,52 L54,50 L50,52 L44,50 L40,48 L36,50 L30,48 L24,46 L20,44 L16,42 L12,38 L10,34 L8,30 L7,25 Z"
                  fill="rgba(74,158,255,0.06)"
                  stroke="rgba(74,158,255,0.25)"
                  strokeWidth="0.5"
                />
                {/* Пунктирные линии поставок из центра (Москва ~36,22) */}
                {cities.filter(c => c.name !== "Москва").map((city, i) => (
                  <line
                    key={i}
                    x1="36" y1="22"
                    x2={city.x} y2={city.y}
                    stroke="rgba(74,158,255,0.2)"
                    strokeWidth="0.4"
                    strokeDasharray="1.5 1.5"
                  />
                ))}
                {/* Точки городов */}
                {cities.map((city, i) => (
                  <g key={i}>
                    <circle
                      cx={city.x} cy={city.y} r={city.name === "Москва" ? 1.8 : 1.1}
                      fill={city.name === "Москва" ? "#e8c547" : "#4a9eff"}
                      opacity={0.9}
                    />
                    {city.name === "Москва" && (
                      <circle cx={city.x} cy={city.y} r={3.5} fill="none" stroke="rgba(232,197,71,0.3)" strokeWidth="0.5" />
                    )}
                    <text
                      x={city.x + (city.x > 50 ? -1 : 2)}
                      y={city.y - 2}
                      fontSize="2.5"
                      fill={city.name === "Москва" ? "#e8c547" : "rgba(240,242,245,0.7)"}
                      textAnchor={city.x > 75 ? "end" : "start"}
                      fontFamily="'IBM Plex Sans', sans-serif"
                    >
                      {city.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* ФУТЕР */}
          <div style={{ paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "12px" }}>
            {/* Левый: лого */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={logoUrl} alt="Shell Tech ABX" style={{ width: "32px", height: "32px", objectFit: "contain", borderRadius: "5px", background: "#000", padding: "2px" }} />
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "15px", fontWeight: 700, color: "var(--s2-text)", letterSpacing: "0.06em" }}>
                SHELL TECH <span style={{ color: "var(--s2-accent)" }}>ABX</span>
              </div>
            </div>

            {/* Центр: год + производство */}
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--s2-accent)", lineHeight: 1, letterSpacing: "0.05em" }}>
                2025
              </div>
              <div style={{ fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--s2-text-dim)", marginTop: "3px", whiteSpace: "nowrap" }}>
                Собственное производство
              </div>
            </div>

            {/* Правый: сертификаты */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
              <div style={{ fontSize: "9px", color: "var(--s2-text-dim)" }}>ГОСТ · ISO 9001</div>
              <div style={{ fontSize: "9px", color: "var(--s2-accent)", border: "1px solid rgba(232,197,71,0.3)", padding: "2px 7px" }}>
                Россия
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
