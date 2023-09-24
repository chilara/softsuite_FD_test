import "./App.css";
import Paths from "./components/routes";
import { ChakraProvider } from "@chakra-ui/react";
// import Dashboard from "./components/screens/dashboard";
// import Navbar from "./components/screens/navbar";

function App() {
  return (
    <ChakraProvider>
      <Paths />
    </ChakraProvider>
  );
}

export default App;
