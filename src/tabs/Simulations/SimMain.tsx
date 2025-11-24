import { useState } from "react";
import { SubTabSwitcher } from "../../components/SubTabSwitcher";
import { SectionTitle } from "../../components/SectionTitle";
import SimBT from "./BT/SimBT";
import SimFEN from "./FEN/SimFEN";

export default function SimMain() {
  const [active, setActive] = useState<"BT" | "FEN">("BT");

  return (
    <div>
      <SectionTitle title="Eğitimde Simülasyonlar" />
      <SubTabSwitcher active={active} onChange={setActive} />

      {active === "BT" ? <SimBT /> : <SimFEN />}
    </div>
  );
}
