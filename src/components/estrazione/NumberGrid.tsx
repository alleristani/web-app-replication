
import { cn } from "@/lib/utils";

interface NumberGridProps {
  takenNumbers: number[];
  selectedNumber: number | null;
  onSelect?: (num: number) => void;
  winningNumber?: number | null;
  disabled?: boolean;
}

const NumberGrid = ({
  takenNumbers,
  selectedNumber,
  onSelect,
  winningNumber,
  disabled,
}: NumberGridProps) => {
  return (
    <div className="grid grid-cols-9 sm:grid-cols-10 gap-1.5">
      {Array.from({ length: 90 }, (_, i) => i + 1).map((num) => {
        const isTaken = takenNumbers.includes(num);
        const isSelected = selectedNumber === num;
        const isWinner = winningNumber === num;

        return (
          <button
            key={num}
            type="button"
            disabled={disabled || isTaken}
            onClick={() => onSelect?.(num)}
            className={cn(
              "aspect-square rounded-md text-xs sm:text-sm font-medium transition-all flex items-center justify-center border",
              isWinner &&
                "bg-yellow-400 text-yellow-900 border-yellow-500 ring-2 ring-yellow-400 animate-pulse",
              isSelected &&
                !isWinner &&
                "bg-primary text-primary-foreground border-primary",
              isTaken &&
                !isSelected &&
                !isWinner &&
                "bg-muted text-muted-foreground/40 border-muted cursor-not-allowed",
              !isTaken &&
                !isSelected &&
                !isWinner &&
                "bg-background border-border hover:bg-accent hover:text-accent-foreground cursor-pointer"
            )}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default NumberGrid;
