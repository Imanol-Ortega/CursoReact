import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css"
export function App(){
    return(
        <section className="App">
            <TwitterFollowCard userName={"imanolitoo"} isFollowing>
                Imanol Ortega
            </TwitterFollowCard>
            <TwitterFollowCard userName={"EddieOnlive"} name={""} isFollowing={false}>
                Eduardo Welchen
            </TwitterFollowCard>
            
        </section>
    )
}