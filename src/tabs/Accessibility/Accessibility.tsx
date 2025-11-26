import { Card } from "../../components/ui/Card";
import { SectionTitle } from "../../components/SectionTitle";
import { useState } from "react";

export default function Accessibility() {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      title: "1) Farklılaştırılmış Öğrenme (Differentiation)",
      content: (
        <>
          <p>
            Öğrencilerin seviyeleri, öğrenme hızları ve teknik altyapıları
            farklı olabilir. Bu yüzden BT simülasyonlarında farklılaştırma
            büyük önem taşır.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Basit – Orta – İleri seviye görevler</li>
            <li>Destekleyici ipuçları ve rehber görseller</li>
            <li>Video açıklamaları veya sesli anlatım</li>
            <li>Kademeli zorluk artışı</li>
          </ul>
        </>
      ),
    },
    {
      title: "2) Erişilebilirlik (Accessibility)",
      content: (
        <>
          <p>
            BT eğitiminde dijital materyaller tüm öğrencilere erişilebilir
            olmalıdır. Görsel, işitsel veya motor beceri sınırlılıkları
            olan öğrenciler için eşit öğrenme fırsatı sağlanır.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Yüksek kontrastlı temalar</li>
            <li>Ekran okuyucu uyumu</li>
            <li>Alt metin (alt-text) zorunluluğu</li>
            <li>Klavye ile gezinme desteği</li>
            <li>Renk körlüğü dostu paletler</li>
          </ul>
        </>
      ),
    },
    {
      title: "3) BT Senaryolarında Erişilebilirlik Örnekleri",
      content: (
        <>
          <p>Simülasyon ve senaryo tabanlı BT eğitiminde erişilebilirlik şu şekilde uygulanabilir:</p>

          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Komut satırı işlemleri için sesli açıklama</li>
            <li>Router topolojilerinde basitleştirilmiş görünüm</li>
            <li>“Auto-complete” destekli IP yazımı</li>
            <li>Görsel karmaşıklığı azaltan sade mod</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="space-y-10">
      <SectionTitle title="Farklılaştırma & Erişilebilirlik" />

      {items.map((item, idx) => (
        <Card
          key={idx}
          className="p-6 space-y-3 cursor-pointer hover:shadow-lg transition"
          onClick={() => setOpen(open === idx ? null : idx)}
        >
          <h2 className="text-2xl font-semibold text-primary">{item.title}</h2>

          {open === idx && (
            <div className="mt-2 text-lg text-gray-800">
              {item.content}
            </div>
          )}

          <p className="
