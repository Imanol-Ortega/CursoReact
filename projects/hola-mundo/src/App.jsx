import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css"

const users = [
    {
        UserName: 'imanolitoo',
        Name: 'Imanol Ortega',
        isFollowing: true

    },
    {
        UserName: 'EddieOnLive',
        Name: 'Eduardo Welchen',
        isFollowing: true

    },
    {
        UserName: 'alexnoaka',
        Name: 'Alexander Rodas',
        isFollowing: true

    },
]

export function App(){
    return(
        <div className="App">
            {
                users.map(({UserName,Name,isFollowing})=>{
                    return (
                        <TwitterFollowCard 

                            key={UserName}
                            userName={UserName}
                            initialIsFollowing={isFollowing}

                        >

                            {Name}
                            
                        </TwitterFollowCard>
                    )
                })
            }
            
        </div>
    )
}