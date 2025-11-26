import { useState } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { SubTabSwitcher } from "../../components/SubTabSwitcher";
import LitBT from "./BT/LitBT";
import LitFEN from "./FEN/LitFEN";

export default function LitMain() {
  const [active, setActive] = useState<"BT" | "FEN">("BT");

  return (
    <div>
      <SectionTitle title="Literatür Analizi" />
      <SubTabSwitcher active={active} onChange={setActive} />
      {active === "BT" ? <LitBT /> : <LitFEN />}
    </div>
  );
}
