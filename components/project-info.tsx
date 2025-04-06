import { Info } from "lucide-react";
import { DeployButton } from "./deploy-button";
import { Alert, AlertDescription } from "./ui/alert";
import Link from "next/link";

export const ProjectInfo = () => {
  return (
    <div className="p-4 mt-auto bg-muted">
      <Alert className="border-0 bg-muted text-muted-foreground">
        <Info className="w-4 h-4 text-primary" />
        <AlertDescription>
          This application uses AI to generate SQL queries for your data based on natural language queries. This is a work in progress.
        </AlertDescription>
      </Alert>
    </div>
  );
};
