import Logo from '../../assets/Logo.png'
import Coins from '../../assets/dollar.png'

const Nav = ({coins} : {coins:number}) => {

    return (
        <div className='container mx-auto flex justify-between items-center my-5'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <nav>
                    <ul className='flex justify-end gap-10 items-center text-[#131313]'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                        <li className='flex items-center gap-2 border-2 border-[#eee] rounded-[10px] p-2
                        '>{coins} Coins <img src={Coins} alt="" /></li>
                    </ul>
                </nav>
                
            </div>
        </div>
    );
};

export default Nav;