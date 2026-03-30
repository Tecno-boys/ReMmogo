import { GroupIcon,Bell,Search } from "lucide-react";

export default function NavBar() {
  return (
    <nav>
        <div className="search">
          <input placeholder="search..."/>
          <button><Search /></button>
        </div>
        <div className="actions">
          <button><GroupIcon /></button>
          <button><Bell /></button>
        </div>
    </nav>
  );
}