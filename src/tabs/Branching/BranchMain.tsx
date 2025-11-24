import { useState } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { SubTabSwitcher } from "../../components/SubTabSwitcher";
import BranchBT from "./BT/BranchBT";
import BranchFEN from "./FEN/BranchFEN";

export default function BranchMain() {
  const [active, setActive] = useState<"BT" | "FEN">("BT");

  return (
    <div>
      <SectionTitle title="Gerçek Dallanan Senaryo" />
      <SubTabSwitcher active={active} onChange={setActive} />
      {active === "BT" ? <BranchBT /> : <BranchFEN />}
    </div>
  );
}
