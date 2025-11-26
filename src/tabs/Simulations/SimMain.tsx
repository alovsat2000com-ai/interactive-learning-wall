import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../components/ui/Accordion";

import MiniQuiz from "../../components/ui/MiniQuiz";

export default function SimMain() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-primary">BT Simülasyonları</h1>

      <p className="text-lg text-gray-800 leading-relaxed">
        Bilgi Teknolojileri eğitiminde simülasyonlar, öğrencilerin karmaşık ağ
        yapılarını, protokolleri ve veri akış süreçlerini risksiz bir ortamda
        deneyimlemesini sağlar. Donanım maliyetini azaltır, öğrenmeyi hızlandırır
        ve soyut kavramları somutlaştırır.
      </p>

      {/* ---------------------------------------------------------------- */}
      {/*   1) Simülasyon Türleri – Tablo                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Simülasyon Türleri</h2>

        <table className="w-full text-left border-collapse text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="py-2 font-medium">Simülasyon Türü</th>
              <th className="py-2 font-medium">Açıklama</th>
              <th className="py-2 font-medium">BT Kullanımı</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Ağ Simülasyonları</td>
              <td>Topoloji ve cihaz modelleme</td>
              <td>Packet Tracer, GNS3</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Protokol Simülasyonları</td>
              <td>Veri akışı ve iletişim</td>
              <td>ARP, DHCP, OSPF modelleri</td>
            </tr>
            <tr>
              <td className="py-2">Kavramsal Simülasyonlar</td>
              <td>Temel bilgisayar bilimi</td>
              <td>PhET, Luma AI</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*   2) Araçlara Özel Accordion                                    */}
      {/* ---------------------------------------------------------------- */}
      <Accordion>
        <AccordionItem value="packettracer">
          <AccordionTrigger>Cisco Packet Tracer</AccordionTrigger>
          <AccordionContent>
            Ağ topolojisi kurma, IP yapılandırma ve paket takibi için ideal.
            Öğrencilerin temel yönlendirme ve iletişim mantığını öğrenmesini sağlar.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="gns3">
          <AccordionTrigger>GNS3</AccordionTrigger>
          <AccordionContent>
            Gerçek Cisco IOS imajları kullanır ve profesyonel seviyede simülasyon sunar.
            Karmaşık ağ yapıları ve firewall testleri için uygundur.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="phet">
          <AccordionTrigger>PhET & Luma AI</AccordionTrigger>
          <AccordionContent>
            Kavramsal CS modelleri ve 3D süreç görselleştirmeleri için kullanılır.
            TCP–UDP, veri paketi akışı gibi soyut kavramları anlaşılır kılar.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* ---------------------------------------------------------------- */}
      {/*   3) Mini Uygulama                                              */}
      {/* ---------------------------------------------------------------- */}
      // MINI QUIZ
<section className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary mt-10">
  <h3 className="text-xl font-semibold">Mini Quiz</h3>

  <MiniQuiz />
</section>

      {/* ---------------------------------------------------------------- */}
      {/*   4) Mini Quiz (Statik – sonra interaktif yapabiliriz)          */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-semibold mb-3">Mini Quiz</h3>

        <p className="font-medium">1) Packet Tracer ne için kullanılır?</p>
        <ul className="ml-6">
          <li>B) Ağ topolojisi modelleme ✔</li>
        </ul>

        <p className="font-medium mt-3">2) GNS3 hangi seviyeye uygundur?</p>
        <ul className="ml-6">
          <li>B) Profesyonel ağ uzmanlığı ✔</li>
        </ul>

        <p className="font-medium mt-3">3) Simülasyonun avantajı nedir?</p>
        <ul className="ml-6">
          <li>A) Donanım maliyetini azaltır ✔</li>
        </ul>
      </section>
    </div>
  );
}
