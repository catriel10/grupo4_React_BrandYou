import LeftSideInfo from "./LeftSideInfo/letfSideInfo"
import RightSideInfo from './RigthSideInfo/RigthSideInfo'
import './style-mainInfo.css'

function MainInfo(params) {
    return(
        <>
            <section className='mainInfo'>
                <LeftSideInfo/>
                <RightSideInfo />
            </section>
        </>
    )   
}
export default MainInfo