import { Routes } from "./routes/Routes";
import { Navigation } from "./components/navigation/Navigation";
import { UserProvider } from "./shared/provider/UserProvider";
import {
  ItemsInCartContext,
  ItemsInCartProvider,
} from "./shared/provider/ItemsInCartProvider";
import "./shared/global/Style.css";
import { PokemonProvider } from "./shared/provider/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <ItemsInCartProvider>
        <UserProvider>
          <Routes>
            <Navigation />
          </Routes>
        </UserProvider>
      </ItemsInCartProvider>
    </PokemonProvider>
  );
}

export default App;
