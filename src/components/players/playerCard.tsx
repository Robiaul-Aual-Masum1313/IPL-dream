import { FaFlag, FaUser } from "react-icons/fa";
import type { Iplayers } from "../../types";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface PlayerCardProps {
  player: Iplayers;
  coins: number;
  setCoins: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayers[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayers[]>>;
}

export default function PlayerCard({
  player,
  coins,
  setCoins,
  selectedPlayers,
  setSelectedPlayers,
}: PlayerCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  // console.log(coins, 'from playercard');
  function clickHandaler() {
    if (selectedPlayers.length < 6) {
      setSelectedPlayers([...selectedPlayers, player]);
      setIsSelected(true);
    } else {
      toast.error("You reached your Limite");
    }
    if (coins < player.price) {
      toast.error("Not enough coins");
      setIsSelected(false);
    } else {
      setCoins(coins - player.price);
      toast.success(`${player.playerName} is pursed successfully`);
    }
  }

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

        {/* Player Type */}
        <span className="badge badge-primary absolute right-4 top-4 border-none px-4 py-3 font-semibold shadow-lg">
          {player.playerType}
        </span>

        {/* Player Name on Image */}
        <div className="absolute bottom-4 left-5 text-white">
          <div className="flex items-center gap-2">
            <FaUser className="text-sm" />
            <h2 className="text-xl font-bold">{player.playerName}</h2>
          </div>

          <div className="mt-1 flex items-center gap-2 text-sm text-white/80">
            <FaFlag />
            <span>{player.origin}</span>
          </div>
        </div>
      </figure>

      {/* Card Content */}
      <div className="space-y-5 p-5">
        {/* Rating / Playing Style */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-base-content/60">
            Playing Style
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Batting</p>
              <p className="mt-1 font-semibold">{player.battingStyle}</p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Bowling</p>
              <p className="mt-1 font-semibold">{player.bowingStyle}</p>
            </div>
          </div>
        </div>

        <div className="divider my-0" />

        {/* Price & Action */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-base-content/50">Player Price</p>

            <p className="text-xl font-bold">৳{player.price}</p>
          </div>

          <button
            onClick={() => clickHandaler()}
            className="btn btn-primary rounded-xl px-5 shadow-md transition-all hover:scale-105"
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}

// import { FaFlag, FaUser } from "react-icons/fa";
// import type { Iplayers } from "../../types";
// interface PlayerCardProps{
//     player: Iplayers
// }

// export default function PlayerCard({player} :PlayerCardProps ) {
//   return (
//      <div className="card bg-base-100 w-90 shadow-sm">
//               <figure>
//                 <img
//                   className="rounded-2xl"
//                   src={player.playerImage}
//                   alt="Shoes"
//                 />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">
//                   <FaUser />
//                   {player.playerName}
//                 </h2>
//                 <div className="flex justify-between">
//                   <div className="flex items-center gap-1.5">
//                     <FaFlag />
//                     <h3>
//                       {player.origin}
//                     </h3>
//                   </div>
//                   <div>
//                     <button className="btn">{player.playerType}</button>
//                   </div>
//                 </div>
//                 <div className="divider my-0"></div>
//                 <p className="font-bold">Rating</p>
//                 <div className="flex justify-between">
//                   <span>{player.battingStyle}</span>
//                   <span>{player.bowingStyle}</span>
//                 </div>
//                 <div className="card-actions justify-between items-center">
//                   <p className="font-bold">Price : {player.price}</p>
//                   <button className="btn btn-primary">Choose Player</button>
//                 </div>
//               </div>
//             </div>
//   )
// }
