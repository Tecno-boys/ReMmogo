import { Users } from "lucide-react";

export default function Groups (){
    return (
        <div className="groups">
            <h1>Groups</h1>
            <div className="groups-wrapper">
            <div className="group">
                 <Users />
                <h2>Group 1</h2>
                <p>Description of Group 1</p>
            </div>
            <div className="group">
                <Users />
                <h2>Group 2</h2>
                <p>Description of Group 2</p>
            </div>
            </div> 
        </div>
    );
}