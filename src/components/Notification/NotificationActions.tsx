import { X, Check } from "lucide-react";

interface NotificationActionsProps {
  onSubmitActions?: () => void;
  onCancelActions?: () => void;
}

export function NotificationActions({}: NotificationActionsProps) {
  return (
    <div className="flex gap-2 items-center justify-center ">
      <button className="w-8 h-8 flex items-center justify-center transition-colors cursor-pointer bg-zinc-800 hover:bg-zinc-700  rounded-md">
        <X className="text-white" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center transition-colors cursor-pointer bg-violet-600 hover:bg-violet-700 rounded-md">
        <Check className="text-white" />
      </button>
    </div>
  );
}
