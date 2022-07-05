import SearchBar from "./features/searchbar/SearchBar";
import Articles from "./features/articles/Articles";
import ShortcutBar from "./features/shortcutbar/ShortcutBar";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <ShortcutBar />
      </header>
      <main id="App-main-content">
        <Articles />
      </main>
    </div>
  );
}

export default App;
