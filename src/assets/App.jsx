import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <section className='App'>
        <TwitterFollowCard isFollowing={true} userName="oblis" name="kevin Oblitas Estrada"/>
        <TwitterFollowCard isFollowing={false} userName="oblis" name="kevin Oblitas Estrada"/>
        <TwitterFollowCard isFollowing userName="oblis" name="kevin Oblitas Estrada"/>
        </section>
    )
}