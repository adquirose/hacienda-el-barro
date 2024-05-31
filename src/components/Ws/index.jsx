import { LogoWhatsapp, LogoInstagram, LogoFacebook } from "../Icons"
function Ws() {
  return (
    <div
        
        style={{
            position:'fixed', 
            width:'50px', 
            height:'140px', 
            zIndex:10, 
            bottom:'30px', 
            right:'30px', 
            cursor:'pointer'
        }}>
          <div className="pb-2" onClick={ () => {window.open('https://api.whatsapp.com/send/?phone=56958580693')}}>
            <LogoWhatsapp />
          </div>
          <div className="pb-2" onClick={ () => {window.open('https://www.instagram.com/haciendaelbarro/')}}>
            <LogoInstagram />
          </div>
          <div onClick={ () => {window.open('https://fb.watch/slVjb3oGep/')}}>
            <LogoFacebook />
          </div>
    </div>
  )
}

export default Ws