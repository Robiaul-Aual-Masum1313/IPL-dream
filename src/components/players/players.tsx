import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayers } from "../../types"
import AvailablePlayers from "./availablePlayers";
import SelectedPlayers from "./selectedPlayers";

 interface PlayersProps {
    feachedData: Promise<Iplayers[]>
    coins: number,
    setCoins : Dispatch<SetStateAction<number>>
}

export default function Players({ feachedData, coins , setCoins }: PlayersProps) {
    const players = use(feachedData);
    const [buttonType, setButttonType] = useState('abailable')
      const [selectedPlayers, setSelectedPlayers] = useState<Iplayers[]>([])
    // console.log(coins, 'reom players');
    
    return (
       
        <div className="container mx-auto">
            <div className="flex justify-between pt-24 pb-16">
                <p className="font-bold text-3xl text-[#131313]">{buttonType === 'abailable' ? 'Available Players' : `Selected Player (${selectedPlayers.length}/6)`}</p>
                <div>
                    <button onClick={() => setButttonType('abailable')} className={`btn ${buttonType === 'abailable' ? 'btn-success' : ''} rounded-r-none`}>Available</button>
                    <button onClick={() => setButttonType('selected')}  className={`btn ${buttonType === 'selected' ? 'btn-success' : ''} rounded-l-none`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            <div>
                {buttonType === 'abailable' ? <AvailablePlayers players = {players}   coins={coins} setCoins= {setCoins} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}/>  : <SelectedPlayers selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} coins = {coins} setCoins = {setCoins}/>}
                
            </div>

        </div>
    );
}