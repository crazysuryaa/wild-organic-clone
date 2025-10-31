import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add search functionality here
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
          <Search className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="mt-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search for organic products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Search</Button>
          </div>
        </form>
        <div className="mt-6">
          <h4 className="font-semibold mb-3">Popular Searches</h4>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setSearchQuery("coconut oil")}>
              Coconut Oil
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSearchQuery("nuts")}>
              Nuts
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSearchQuery("cacao")}>
              Cacao
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSearchQuery("seeds")}>
              Seeds
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
