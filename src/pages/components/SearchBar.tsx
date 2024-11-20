const SearchBar = ({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) => {
    return (
      <div className="my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="border rounded-lg p-2 w-full md:w-1/3"
        />
      </div>
    );
  };
  
  export default SearchBar;
  