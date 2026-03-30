import { GroupIcon,Bell } from "lucide-react";

export default function NavBar() {
  return (
    <nav>
        <input />
        <div className="actions">
          <button><GroupIcon /></button>
          <button><Bell /></button>
        </div>
    </nav>
  );
}