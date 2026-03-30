import { List,Home,Search,Calendar,GroupIcon,
    MessageSquare, Settings, LucideLogOut,HelpCircle } from "lucide-react";

export default function SideBar(){
    return (
        <aside>
            <h2>
                <List />
                <p>Re-Mmogo</p>
            </h2>
            <div className="Menu">
                <h3>Menu</h3>
                <ul>
                    <li><a href="/"><Home /><p>Home</p></a></li>
                    <li><a href="/search"><Search /><p>Search</p></a></li>
                    <li><a href="/events"><Calendar /><p>Events</p></a></li>
                    <li><a href="/messages"><MessageSquare /><p>Messages</p></a></li>
                </ul>
            </div>
            <div className="General">
                <h3>General</h3>
                <ul>
                    <li><a href="/settings"><Settings /><p>Settings</p></a></li>
                    <li><a href="/help"><HelpCircle /><p>Help</p></a></li>
                    <li><a href="/logout"><LucideLogOut /><p>Logout</p></a></li>
                </ul>
            </div>
            <div className="profile">
                <img src="https://tse1.mm.bing.net/th/id/OIP.hZaP6EonKH3G5ZgjAajs9AHaEo?w=1920&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Profile Picture" />
                <div className="accInfo">
                    <p>John Doe</p>
                    <p>john.doe@example.com</p>
                </div>
            </div>
        </aside>
    );
}