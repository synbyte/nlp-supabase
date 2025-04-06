import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const SuggestedQueries = ({
  handleSuggestionClick,
}: {
  handleSuggestionClick: (suggestion: string) => void;
}) => {
  const suggestionQueries = [
    {
      desktop: "Who are my top five donors?",
      mobile: "SF vs NY",
    },
    {
      desktop: "When was the last time X made a donation?",
      mobile: "US vs China",
    },
    {
      desktop: "How many donations have been made in the last 2 months?",
      mobile: "Top countries",
    },
    {
      desktop:
        "Show me the last 20 donations.",
      mobile: "Yearly count",
    },
    {
      desktop: "Show me all the donations X made this month.",
      mobile: "Total value",
    },
    
  ];

  return (
    <motion.div
      key="suggestions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      exit={{ opacity: 0 }}
      className="overflow-y-auto h-full"
    >
      <h2 className="mb-4 text-lg font-semibold sm:text-xl text-foreground">
        Try these queries:
      </h2>
      <div className="flex flex-wrap gap-2">
        {suggestionQueries.map((suggestion, index) => (
          <Button
            key={index}
            className={index > 5 ? "hidden sm:inline-block" : ""}
            type="button"
            variant="outline"
            onClick={() => handleSuggestionClick(suggestion.desktop)}
          >
            <span className="sm:hidden">{suggestion.mobile}</span>
            <span className="hidden sm:inline">{suggestion.desktop}</span>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
