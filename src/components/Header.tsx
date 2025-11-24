import { ReactNode } from "react";

interface HeaderProps {
  activeTab: number;
  setActiveTab: (i: number) => void;
  tabs: string[];
}

export function Header({ activeTab, setActiveTab, tabs }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto px-8 max-w-[1600px] flex items-center justify-between py-2">
          <h1 className="text-2xl font-bold text-[var(--primary)]">
            Interactive Learning Wall — IT & Science
          </h1>
        </div>
      </div>

      <div className="overflow-x-auto bg-neutral-50 border-b border-gray-200">
        <div className="container mx-auto px-8 max-w-[1600px] flex gap-2 py-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 
                ${
                  activeTab === i
                    ? "bg-[var(--primary)] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
