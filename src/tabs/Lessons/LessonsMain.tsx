import { useState } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { SubTabSwitcher } from "../../components/SubTabSwitcher";
import LessonsBT from "./BT/LessonsBT";
import LessonsFEN from "./FEN/LessonsFEN";

export default function LessonsMain() {
  const [active, setActive] = useState<"BT" | "FEN">("BT");

  return (
    <div>
      <SectionTitle title="Örnek Ders Senaryoları" />
      <SubTabSwitcher active={active} onChange={setActive} />
      {active === "BT" ? <LessonsBT /> : <LessonsFEN />}
    </div>
  );
}
