import './App.css';
import BooksList from "./books-list/BooksList";
import Search from "./search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <BooksList />
    </div>
  );
}

export default App;
