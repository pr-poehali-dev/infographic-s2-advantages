import Icon from "@/components/ui/icon";

const logoUrl = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/bucket/99f4881a-ce8f-4bad-8bea-29beb2b5a91c.png";
const granuleImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/d0ce1f17-642f-4b2b-b29c-03f84e967421.jpg";
const autoImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/516e3281-8505-4a2a-a67b-12a109b0571b.jpg";
const restoreImage = "https://cdn.poehali.dev/projects/34b61057-f4b7-4f4f-8721-b92a9e16726f/files/da491448-794d-4581-8593-f58db09febbc.jpg";

const advantages = [
  {
    icon: "Leaf",
    title: "Натуральное сырьё",
    desc: "Скорлупа грецкого ореха. Органический, биоразлагаемый материал без токсинов.",
    color: "#4caf7d",
  },
  {
    icon: "Zap",
    title: "Щадящее воздействие",
    desc: "Не повреждает металл, пластик и стекло. Сохраняет геометрию детали.",
    color: "#e8c547",
  },
  {
    icon: "Layers",
    title: "Однородная фракция",
    desc: "Строгий диапазон 1–1,5 мм. Равномерная обработка без царапин.",
    color: "#4a9eff",
  },
  {
    icon: "Shield",
    title: "Без пыли и токсинов",
    desc: "Нет свободного кремния. Безопасен для оператора без спецзащиты.",
    color: "#4caf7d",
  },
  {
    icon: "Recycle",
    title: "Многократное использование",
    desc: "3+ цикла без потери свойств. Экономия расхода материала до 40%.",
    color: "#e8c547",
  },
  {
    icon: "Award",
    title: "Стабильное качество",
    desc: "Твёрдость 3,5–4 по Моосу. Постоянный состав от партии к партии.",
    color: "#4a9eff",
  },
];

const specs = [
  { label: "Размер фракции", value: "1,0 – 1,5 мм", unit: "", bar: 75 },
  { label: "Твёрдость по Моосу", value: "3,5 – 4,0", unit: "", bar: 40 },
  { label: "Плотность насыпная", value: "600 – 700", unit: "кг/м³", bar: 65 },
  { label: "Влажность", value: "≤ 8", unit: "%", bar: 8 },
  { label: "Свободный кремний", value: "0", unit: "%", bar: 0 },
  { label: "Переиспользование", value: "3+", unit: "цикл.", bar: 50 },
];

const useCases = [
  { img: autoImage, title: "Автосервис", desc: "Удаление ЛКП, ржавчины и старых покрытий без повреждения металла" },
  { img: restoreImage, title: "Реставрация", desc: "Мебель, антиквариат, деревянные и металлические изделия" },
  { img: granuleImage, title: "Авиация и ОПК", desc: "Очистка двигателей, лопаток турбин, деликатных деталей" },
];

const Index = () => {
  return (
    // Формат 3:4 — фиксированная карточка для маркетплейсов
    <div
      style={{
        background: "var(--s2-dark)",
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${granuleImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15) saturate(0.5)",
          }}
        />

        {/* Сетка */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(232,197,71,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.07) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Угловые акценты */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "320px", height: "320px", background: "conic-gradient(from 45deg, rgba(232,197,71,0.18), transparent 40%)", clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "200px", height: "200px", background: "conic-gradient(from 225deg, rgba(76,175,125,0.12), transparent 40%)", clipPath: "polygon(0 100%, 0 0, 100% 100%)" }} />

        {/* КОНТЕНТ */}
        <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", padding: "40px 48px" }}>

          {/* ШАПКА: логотип + название */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
            <img src={logoUrl} alt="Shell Tech ABX" style={{ width: "64px", height: "64px", objectFit: "contain", borderRadius: "8px", background: "#000", padding: "4px" }} />
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: 700, color: "var(--s2-text)", letterSpacing: "0.06em", lineHeight: 1 }}>
                SHELL TECH <span style={{ color: "var(--s2-accent)" }}>ABX</span>
              </div>
              <div style={{ fontSize: "11px", color: "var(--s2-text-dim)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>
                Абразив · Скорлупа грецкого ореха
              </div>
            </div>
          </div>

          {/* HERO-ЗАГОЛОВОК */}
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "inline-block", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--s2-accent)", border: "1px solid var(--s2-accent)", padding: "4px 10px", background: "rgba(232,197,71,0.07)", marginBottom: "14px" }}>
              Фракция · 1,0 – 1,5 мм
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 700, lineHeight: 0.95, color: "var(--s2-text)", letterSpacing: "0.02em" }}>
              АБРАЗИВ
              <br />
              <span style={{ color: "var(--s2-accent)" }}>ОРЕХОВЫЙ S2</span>
            </div>
          </div>

          {/* ПРОДАЮЩИЙ МОМЕНТ */}
          <div style={{ background: "linear-gradient(135deg, rgba(76,175,125,0.18) 0%, rgba(76,175,125,0.05) 100%)", border: "1px solid rgba(76,175,125,0.4)", padding: "18px 22px", marginBottom: "28px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "#4caf7d" }} />
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "15px", fontWeight: 600, color: "#4caf7d", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
              Экономия до 40% vs песок и корунд
            </div>
            <div style={{ fontSize: "13px", color: "var(--s2-text-dim)", lineHeight: 1.5 }}>
              Щадит поверхность · Не оставляет кремния · Работает 3+ цикла
            </div>
          </div>

          {/* ЦИФРЫ */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "rgba(232,197,71,0.15)", marginBottom: "28px" }}>
            {[
              { val: "1–1,5", unit: "мм", label: "Фракция" },
              { val: "3,5–4", unit: "Моос", label: "Твёрдость" },
              { val: "0%", unit: "", label: "Кремний" },
              { val: "3+", unit: "цикл.", label: "Ресурс" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "14px 12px", background: "rgba(10,12,14,0.9)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: 700, color: "var(--s2-accent)", lineHeight: 1 }}>
                  {s.val}
                  {s.unit && <span style={{ fontSize: "11px", color: "var(--s2-text-dim)", marginLeft: "2px" }}>{s.unit}</span>}
                </div>
                <div style={{ fontSize: "10px", color: "var(--s2-text-dim)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ПРИМЕНЕНИЕ — карточки с фото */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "28px", flex: "0 0 auto" }}>
            {useCases.map((uc, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", height: "140px" }}>
                <img src={uc.img} alt={uc.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.7)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,12,14,0.95) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "10px", left: "12px", right: "12px" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--s2-text)", letterSpacing: "0.04em" }}>{uc.title}</div>
                  <div style={{ fontSize: "10px", color: "var(--s2-text-dim)", marginTop: "2px", lineHeight: 1.3 }}>{uc.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ХАРАКТЕРИСТИКИ — компактные */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--s2-accent)", marginBottom: "12px" }}>
              Технические характеристики
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
              {specs.map((spec, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
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

          {/* ФУТЕР */}
          <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={logoUrl} alt="Shell Tech ABX" style={{ width: "28px", height: "28px", objectFit: "contain", borderRadius: "4px", background: "#000", padding: "2px" }} />
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--s2-text)", letterSpacing: "0.06em" }}>
                SHELL TECH <span style={{ color: "var(--s2-accent)" }}>ABX</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ fontSize: "10px", color: "var(--s2-text-dim)" }}>ГОСТ · ISO 9001</div>
              <div style={{ fontSize: "10px", color: "var(--s2-accent)", border: "1px solid rgba(232,197,71,0.3)", padding: "3px 8px" }}>
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
