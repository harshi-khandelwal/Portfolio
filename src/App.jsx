import GalaxyBackground from "./components/GalaxyBackground";
import Spaceship from "./components/Spaceship";
import Planet from "./components/Planet";

function App() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <GalaxyBackground />
      <Spaceship />

      <Planet
        img="/planets(1).png"
        name="Weather"
        top="40%"
        left="20%"
        link="https://harshi-khandelwal.github.io/Weather/"
      />
      <Planet
        img="/planets(2).png"
        name="Expense Tracker"
        top="60%"
        left="50%"
        link="https://expense-tracker-blue-three-11.vercel.app/"
      />
      <Planet
        img="/planets(3).jpg"
        name="Blog Site"
        top="30%"
        left="75%"
        link="https://appwrite-blog-tau-brown.vercel.app"
      />
    </div>
  );
}

export default App;
