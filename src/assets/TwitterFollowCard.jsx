export function TwitterFollowCard({userName, name, isFollowing}){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de mideudev" src="https://imgv3.fotor.com/images/share/fotor-ai-generate-a-lifelike-dragon.jpg" width="500"/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    )
}