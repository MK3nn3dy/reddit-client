import SearchBar from "./features/searchbar/SearchBar";
import Articles from "./features/articles/Articles";
import ShortcutBar from "./features/shortcutbar/ShortcutBar";
import FilterResults from "./features/filterresults/FilterResults";
import ShortcutsToAdd from "./features/shortcutbar/ShortcutsToAdd";

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
      <footer>
        <ShortcutsToAdd />
      </footer>
    </div>
  );
}

export default App;
