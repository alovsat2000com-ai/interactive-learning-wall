import { useState } from "react";
import SimMain from "./tabs/Simulations/SimMain";
import ScenMain from "./tabs/Scenarios/ScenMain";
import LitMain from "./tabs/Literature/LitMain";
import BranchMain from "./tabs/Branching/BranchMain";
import LessonsMain from "./tabs/Lessons/LessonsMain";
import Interactions from "./tabs/Interactions/Interactions.tsx";
import Assessment from "./tabs/Assessment/Assessment";
import Accessibility from "./tabs/Accessibility/Accessibility";
import References from "./tabs/References/References";

import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";

export default function App() {
  const tabs = [
    "Simülasyonlar",
    "Senaryolar",
    "Literatür Analizi",
    "Dallanan Senaryo",
    "Ders Senaryoları",
    "Mini Etkileşimler",
    "Ölçme – Değerlendirme",
    "Farklılaştırma & Erişilebilirlik",
    "Kaynakça"
  ];

  const [activeTab, setActiveTab] = useState(0);

  const renderTab = () => {
    switch (activeTab) {
      case 0: return <SimMain />;
      case 1: return <ScenMain />;
      case 2: return <LitMain />;
      case 3: return <BranchMain />;
      case 4: return <LessonsMain />;
      case 5: return <Interactions />;
      case 6: return <Assessment />;
      case 7: return <Accessibility />;
      case 8: return <References />;
      default: return <SimMain />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      <main className="pt-40 pb-24 container mx-auto px-8 max-w-[1600px]">
        {renderTab()}
      </main>

      <ProgressBar
        current={activeTab}
        total={tabs.length}
        next={() => setActiveTab((t) => Math.min(t + 1, tabs.length - 1))}
        prev={() => setActiveTab((t) => Math.max(t - 1, 0))}
      />
    </div>
  );
}
