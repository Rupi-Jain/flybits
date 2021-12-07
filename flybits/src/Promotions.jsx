import './App.css'
import { atom, useRecoilValue } from 'recoil'
import { promotions as promotionsAtom} from './atoms'
import PromotionsList from './PromotionsList'
const Promotions = () => {
  let promotions = []
  promotions = useRecoilValue(promotionsAtom) 
  console.log("prom", promotions)
  return (
    <div className='branch-name' >
      <div>
      {promotions.map(promos => (
        <PromotionsList caption={promos.promotion.caption} image={promos.promotion.image}></PromotionsList>
      ))} 
      </div>
    </div>
  )
}

export default Promotions