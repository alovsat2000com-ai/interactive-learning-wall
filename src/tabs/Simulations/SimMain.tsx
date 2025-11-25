import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/Accordion.tsx";

export default function SimMain() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">
        BT Simülasyonları
      </h1>

      <p className="text-lg leading-relaxed">
        Bilgi teknolojileri eğitiminde simülasyonlar, öğrencilerin karmaşık ağ
        yapıları, protokoller ve güvenlik tehditlerini risksiz ve kontrollü
        bir ortamda öğrenmelerini sağlar. Gerçek donanım maliyetleri olmadan
        deneme–yanılma süreciyle öğrenme hızlanır.
      </p>

      {/* ────────────────────────────── */}
      {/*   A C C O R D I O N           */}
      {/* ────────────────────────────── */}

      <Accordion>
        <AccordionItem value="packettracer">
          <AccordionTrigger>
            Cisco Packet Tracer
          </AccordionTrigger>
          <AccordionContent>
            Cisco Packet Tracer, öğrencilerin gerçek donanım gerektirmeden
            ağ topolojileri oluşturmasını, cihaz yapılandırmasını ve paket
            hareketini takip etmesini sağlar.
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Temel yönlendirme öğretimi</li>
              <li>Switch / Router mantığını kavratır</li>
              <li>IP yapılandırması ve ping testleri</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="gns3">
          <AccordionTrigger>
            GNS3
          </AccordionTrigger>
          <AccordionContent>
            GNS3, gerçek Cisco IOS imajlarıyla çalışan profesyonel seviyede
            bir simülasyon platformudur. Karmaşık ağ mimarilerini simüle etmek
            için idealdir.
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Gerçek router yazılımı kullanımı</li>
              <li>Firewall / IDS senaryoları</li>
              <li>İleri seviye routing algoritmaları</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="phet">
          <AccordionTrigger>
            PhET & Luma AI
          </AccordionTrigger>
          <AccordionContent>
            PhET temel bilgisayar bilimi kavramlarının modellenmesinde
            kullanılabilir. Luma AI ise süreçlerin 3D görselleştirilmesini
            kolaylaştırır.
            <p className="mt-3">
              Özellikle BT eğitiminde kavramsal modelleme için etkili iki araçtır.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* ────────────────────────────── */}
      {/*   M I N I   U Y G U L A M A   */}
      {/* ────────────────────────────── */}

      <section className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
        <h3 className="text-xl font-semibold">Mini Uygulama</h3>
        <p className="mt-2">
          Packet Tracer içinde küçük bir ağ kurun:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>2 PC</li>
          <li>1 Switch</li>
          <li>1 Router</li>
          <li>IP atama + Ping testi</li>
        </ul>
        <p className="mt-3 font-medium">
          Beklenen Çıktı:{" "}
          <span className="text-primary">Temel ağ iletişimini kavrama.</span>
        </p>
      </section>
    </div>
  );
}
