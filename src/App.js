import SearchBar from "./features/searchbar/SearchBar";
import Articles from "./features/articles/Articles";
import ShortcutBar from "./features/shortcutbar/ShortcutBar";
import FilterResults from "./features/filterresults/FilterResults";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <ShortcutBar />
        <FilterResults />
      </header>
      <main id="App-main-content">
        <Articles />
      </main>
    </div>
  );
}

export default App;
