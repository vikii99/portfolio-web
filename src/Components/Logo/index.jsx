import "./index.scss"
import LogoS from '../../assets/images/logo-v-new.png'
const Logo = () => {
     return(
        <div className="logo-container">
            <img classname="solid-logo" src={LogoS} alt="S"/>
        </div>
     )
}

export default Logo