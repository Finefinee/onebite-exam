import { Button } from "@/components/ui/button";

import "./App.css";
import { cn } from "@/lib/utils.ts";

function App() {
  const isActive = true;

  return (
    <div>
      <Button variant="default">버튼</Button>

      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>

      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

export default App;
