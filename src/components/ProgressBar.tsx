import { Button } from "./ui/Button";

interface Props {
  current: number;
  total: number;
  next: () => void;
  prev: () => void;
}

export function ProgressBar({ current, total, next, prev }: Props) {
  const percent = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-8 max-w-[1600px]">

        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--primary)] transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex items-center justify-between py-3">
          <Button variant="outline" onClick={prev} disabled={current === 0}>
            ← Geri
          </Button>

          <span className="text-gray-700">
            {current + 1} / {total}
          </span>

          <Button onClick={next} disabled={current === total - 1}>
            İleri →
          </Button>
        </div>

      </div>
    </div>
  );
}
