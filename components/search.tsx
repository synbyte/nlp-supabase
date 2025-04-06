import { Search as SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Search = ({
  handleSubmit,
  inputValue,
  setInputValue,
  submitted,
  handleClear,
}: {
  handleSubmit: () => Promise<void>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  submitted: boolean;
  handleClear: () => void;
}) => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit();
      }}
      className="mb-6"
    >
      <div className="flex flex-col items-stretch space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="What would you like to know?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="pr-10 text-base"
          />
          <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        <div className="flex gap-2 justify-center items-center sm:flex-row">
          {submitted ? (
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
              className="w-full sm:w-auto"
            >
              Clear
            </Button>
          ) : (
            <Button type="submit" className="w-full sm:w-auto">
              Send
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
