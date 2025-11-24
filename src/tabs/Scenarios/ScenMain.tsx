import { useState } from "react";
import { SubTabSwitcher } from "../../components/SubTabSwitcher";
import { SectionTitle } from "../../components/SectionTitle";
import ScenBT from "./BT/ScenBT";
import ScenFEN from "./FEN/ScenFEN";

export default function ScenMain() {
  const [active, setActive] = useState<"BT" | "FEN">("BT");

  return (
    <div>
      <SectionTitle title="Eğitimde Senaryolar" />
      <SubTabSwitcher active={active} onChange={setActive} />

      {active === "BT" ? <ScenBT /> : <ScenFEN />}
    </div>
  );
}
