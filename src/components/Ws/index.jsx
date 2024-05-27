import { LogoWhatsapp, LogoInstagram  } from "../Icons"
function Ws() {
  return (
    <div
        
        style={{
            position:'fixed', 
            width:'50px', 
            height:'100px', 
            zIndex:10, 
            bottom:'30px', 
            right:'30px', 
            cursor:'pointer'
        }}>
          <div className="pb-2" onClick={ () => {window.open('https://api.whatsapp.com/send/?phone=56972142535')}}>
            <LogoWhatsapp />
          </div>
          <div onClick={ () => {window.open('https://www.instagram.com/donadomingaparcelas/')}}>
            <LogoInstagram />
          </div>
    </div>
  )
}

export default Ws