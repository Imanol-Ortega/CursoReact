/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Children } from "react";

export function TwitterFollowCard ({children,userName,isFollowing}){
    
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src= {`https://unavatar.io/${userName}`} alt="Avatar ejemplo" />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">Seguir</button>
        </aside>
    </article> 
    )
}