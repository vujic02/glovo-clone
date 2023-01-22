import { AppProvider } from "./context";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}
