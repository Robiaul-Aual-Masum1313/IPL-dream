import type { Dispatch, SetStateAction } from "react";
import type { Iplayers } from "../../types";
import PlayerCard from "./playerCard";

export interface AvailablePlayersProps {
  players: Iplayers[];
      coins: number;
      setCoins : Dispatch<SetStateAction<number>>;
      selectedPlayers: Iplayers[];
      setSelectedPlayers: Dispatch<SetStateAction<Iplayers[]>>
}

export default function AvailablePlayers({ players, coins , setCoins, selectedPlayers , setSelectedPlayers }: AvailablePlayersProps) {

  return (
    <>
      <div className="grid grid-cols-4 gap-7">
        {players.map((player,ind) => {
          return (
           <PlayerCard key={ind} player={player}   coins={coins} setCoins= {setCoins}  selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} /> 
          );
        })}
      </div>
    </>
  );
}
