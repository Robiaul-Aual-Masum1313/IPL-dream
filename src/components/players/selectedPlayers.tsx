import type { Dispatch, SetStateAction } from "react"
import type { Iplayers } from "../../types"
import { RiDeleteBinLine } from "react-icons/ri"

interface selectedPlayersProp{
  selectedPlayers: Iplayers[]
  setSelectedPlayers: Dispatch<SetStateAction<Iplayers[]>>
      coins: number,
    setCoins : Dispatch<SetStateAction<number>>
}

export default function SelectedPlayers({selectedPlayers ,  setSelectedPlayers, coins , setCoins} : selectedPlayersProp) {

function handleRemovePlayer (player: Iplayers){
  const filteredPlayers = selectedPlayers.filter(item => item.playerName !== player.playerName)
  setSelectedPlayers(filteredPlayers)
  setCoins(coins + player.price)
}

if( selectedPlayers.length === 0){
  return (
    <div className="text-center space-y-3">
      <h2 className="font-bold text-3xl">No players selected yet!</h2>
      <p className="">Please select a player from available players</p>
    </div>
  )
}
  return (
    <div >
      {
      selectedPlayers.map((player, index) => {
        return (
          <div key={index} className="w-full flex justify-between items-center border-2 border-[#eee] p-5 m-3 rounded-[10px]">
            <div className="flex justify-start  gap-3.5 items-center">
              <img className="w-20 rounded-[10px]" src={player.playerImage} alt="" />
              <div>
                <h2 className="font-bold text-2xl text-[#131313]">{player.playerName}</h2>
                <p className="text-[14px]">{player.playerType}</p>
              </div>
            </div>
            <RiDeleteBinLine className="cursor-pointer" onClick={() => handleRemovePlayer(player)} />
          </div>
        )
      })}
    </div>
  )
}
