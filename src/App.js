import { Routes } from "./routes/Routes";
import { Navigation } from "./components/navigation/Navigation";
import { UserProvider } from "./shared/provider/UserProvider";
import {
  ItemsInCartContext,
  ItemsInCartProvider,
} from "./shared/provider/ItemsInCartProvider";
import "./shared/global/Style.css";

function App() {
  return (
    <ItemsInCartProvider>
      <UserProvider>
        <Routes>
          <Navigation />
        </Routes>
      </UserProvider>
    </ItemsInCartProvider>
  );
}

export default App;
