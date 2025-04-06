import { Moon, Sun } from "lucide-react";
import { DeployButton } from "./deploy-button";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const Header = ({ handleClear }: { handleClear: () => void }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1
        className="flex items-center text-2xl font-bold cursor-pointer sm:text-3xl text-foreground"
        onClick={() => handleClear()}
      >
        GivAI - Talk with your data
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <div className="hidden sm:block">

        </div>
      </div>
    </div>
  );
};
