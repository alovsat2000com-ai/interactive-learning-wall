import { ToggleBox } from "../../../components/ui/ToggleBox";

export default function BranchMain() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">
        Dallanan BT Senaryosu
      </h1>

      <p className="text-lg leading-relaxed">
        Bu bölümde, gerçek bir BT yöneticisinin karşılaşabileceği bir
        güvenlik senaryosu üzerinden seçim yaparak ilerleyeceksiniz.
        Verdiğiniz kararlar, sistemin güvenliğini ya güçlendirecek ya da
        zayıflatacaktır.
      </p>

      <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-secondary">
          Senaryo: Ofis Ağı Güvenlik Problemi
        </h2>

        <p>
          Ofiste şüpheli ağ trafiği tespit edildi. Loglarda bilinmeyen bir
          IP adresine sürekli bağlantı girişimleri görünüyor. Sistem
          yöneticisi olarak ilk adımda ne yaparsınız?
        </p>

        {/* ────────────────────────────── */}
        {/*   T O G G L E   B O X  #1     */}
        {/* ────────────────────────────── */}

        <ToggleBox
          title="1. Adım: Firewall'u tamamen kapatmak mantıklı mı?"
          correctText="Hayır. Firewall'u tamamen kapatmak saldırı riskini arttırır. Sorunu çözmek yerine sistemi daha savunmasız hale getirir."
          wrongText="Bu işlem doğru değildir. Firewall'u kapatmak ağ güvenliğini zayıflatır."
        />

        {/* ────────────────────────────── */}
        {/*   T O G G L E   B O X  #2     */}
        {/* ────────────────────────────── */}

        <ToggleBox
          title="2. Adım: Şüpheli trafiği izole edip log analizi yapmak"
          correctText="Evet! Bu doğru yaklaşımdır. Trafiği izole etmek ve kaynak IP'yi incelemek güvenli bir ilk adımdır."
          wrongText="Aslında bu doğru bir yaklaşım olmalıydı. Önce trafiği izole etmek gerekir."
        />

        {/* ────────────────────────────── */}
        {/*   T O G G L E   B O X  #3     */}
        {/* ────────────────────────────── */}

        <ToggleBox
          title="3. Adım: Tüm kullanıcıların parolasını acil olarak sıfırlamak gerekli mi?"
          correctText="Bu karar, saldırının kullanıcı kimlik doğrulamasıyla ilgili olduğuna dair kanıt varsa doğru olabilir. Ama ilk adım değildir."
          wrongText="Bu her zaman en doğru çözüm değildir. Önce saldırının kaynağı belirlenmeli."
        />
      </section>

      <section className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary mt-4">
        <h3 className="text-xl font-semibold">Senaryo Sonucu</h3>
        <p className="mt-2">
          Bu mini senaryo, BT uzmanlarının olay müdahalesinde adım adım
          düşünmesi gerektiğini gösterir. Doğru karar ağ güvenliğini
          güçlendirir, yanlış karar ise riskleri artırır.
        </p>
      </section>
    </div>
  );
}
