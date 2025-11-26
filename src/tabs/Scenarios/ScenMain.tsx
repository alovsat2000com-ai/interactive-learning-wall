import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../components/ui/Accordion";

export default function ScenMain() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-primary">BT Senaryoları</h1>

      {/* INTRODUCTION */}
      <p className="text-lg leading-relaxed text-gray-800">
        Bilgi Teknolojileri eğitiminde senaryolar, öğrencilerin karar verme,
        problem çözme ve olay yönetimi becerilerini geliştirmek için kullanılan
        yapılandırılmış öğrenme süreçleridir. Özellikle ağ güvenliği, sistem
        hataları, siber saldırı analizi ve BT operasyonları gibi karmaşık
        durumların öğretiminde son derece etkilidir.
      </p>

      {/* ------------------------------------------------------------ */}
      {/* 1) Senaryo Türleri – Bilgi Teknolojileri                    */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-xl font-semibold mb-3">
          BT Eğitiminde Senaryo Türleri
        </h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>
            <strong>Olay Tabanlı Senaryo (Incident Scenario):</strong> 
            Öğrenciye ağda veya sunucuda gerçekleşen bir problem verilir.
          </li>
          <li>
            <strong>Karar Noktalı Senaryo (Branching):</strong> 
            Her adımda öğrenci bir seçim yapar ve farklı sonuçlara gider.
          </li>
          <li>
            <strong>Rol Tabanlı Senaryo:</strong> 
            Öğrenci BT uzmanı, analist, güvenlik operatörü vb. rolleri üstlenir.
          </li>
          <li>
            <strong>Log Analizi Senaryosu:</strong> 
            Firewall, IDS veya sistem logları üzerinden suçla doğru ipuçları aranır.
          </li>
        </ul>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 2) Accordion – 3 Büyük BT Senaryosu                         */}
      {/* ------------------------------------------------------------ */}
      <Accordion>
        <AccordionItem value="incident">
          <AccordionTrigger>Ağ Arızası Olay Senaryosu</AccordionTrigger>
          <AccordionContent>
            Öğrencinin görevleri:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Switch üzerinde VLAN yapılandırmasını kontrol etmek</li>
              <li>Ping / traceroute testi ile problem noktası belirleme</li>
              <li>Yedek topolojiye geçiş planı oluşturma</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="security">
          <AccordionTrigger>Siber Saldırı Tespit Senaryosu</AccordionTrigger>
          <AccordionContent>
            Öğrencinin adımları:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Anormal trafik modelini incelemek</li>
              <li>Loglardan IP tespiti yapmak</li>
              <li>Firewall üzerinde geçici bir kural oluşturmak</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ops">
          <AccordionTrigger>Sunucu Çökmesi – BT Operasyon Senaryosu</AccordionTrigger>
          <AccordionContent>
            Öğrenci, sistem kapandığında izlenecek adımları sıralar:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Servisleri yeniden başlatmak</li>
              <li>Disk / CPU / RAM loglarını incelemek</li>
              <li>Kök neden analizi (Root Cause Analysis)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* ------------------------------------------------------------ */}
      {/* 3) Mini Etkileşim – Karar Noktası                           */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-secondary/10 p-6 rounded-xl border-l-4 border-secondary">
        <h3 className="text-xl font-semibold">Mini Karar Noktası</h3>

        <p className="mt-2">
          Aşağıdaki durumda ilk adımınız ne olurdu?
        </p>

        <div className="mt-4 space-y-3">
          <button className="w-full text-left p-3 bg-white shadow rounded-lg hover:bg-gray-50 transition border">
            1) Logları inceleyerek anomalileri doğrulamak
          </button>

          <button className="w-full text-left p-3 bg-white shadow rounded-lg hover:bg-gray-50 transition border">
            2) Bütün ağı kapatarak saldırıyı durdurmak
          </button>

          <button className="w-full text-left p-3 bg-white shadow rounded-lg hover:bg-gray-50 transition border">
            3) Firewall'da IP bloklamaya başlamak
          </button>
        </div>

        <p className="mt-3 text-gray-700">
          *Doğru yaklaşım: önce analiz, sonra aksiyon. 
          Yanlış hareket tüm sistemi devre dışı bırakabilir.*
        </p>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 4) Öğrenme Kazanımları                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-xl font-semibold mb-3">Öğrenme Kazanımları</h3>

        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Ağ ve güvenlik problemlerinde sistematik karar verme</li>
          <li>Risk değerlendirmesi ve alternatif çözümleri karşılaştırma</li>
          <li>Gerçek BT operasyon akışlarını anlamlandırma</li>
          <li>Log analizi ve olay yönetimi becerisi</li>
        </ul>
      </section>
    </div>
  );
}
