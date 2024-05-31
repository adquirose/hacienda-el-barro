import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap"
import { Email, LogoWhatsapp, PhoneCall } from '../Icons';
// import LogoTavacorp from '../../assets/images/tavacorp.png';
import Logo from '../../assets/images/logo-negro.png';

const INITIAL_STATE = {
  nombre:'',
  // rut:'',
  telefono:'',
  valorUfPesos:'',
  email:''
}

// const options = [
//   {value: '', text: '-- Elije Tipo de Casa --'},
//   {value: '1', text: 'Casa 1'},
//   {value: '2', text: 'Casa 2'},
//   {value: '3', text: 'Casa 3'},
//   {value: '4', text: 'Casa 4'},
//   {value: '5', text: 'Casa 5'},
//   {value: '6', text: 'Casa 6'},
//   {value: '7', text: 'Casa 7'},
//   {value: '8', text: 'Casa 8'},
//   {value: '9', text: 'Casa 9'},
//   {value: '10', text: 'Casa 10'},
//   {value: '11', text: 'Casa 11'},
//   {value: '12', text: 'Casa 12'},
// ];
function Formulario(){
  const [data, setData] = useState(INITIAL_STATE)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [valorUfPesos, setValorUfPesos] = useState(0)
  const [message, setMessage] = useState('')
  
  const handleOnChange = event => {
    event.preventDefault()
    setData({...data, valorUfPesos: valorUfPesos, [event.target.name]: event.target.value})
  }
  
  useEffect(()=> {
    axios.get('https://mindicador.cl/api')
      .then((response) => {
        setValorUfPesos(response.data.uf.valor)
      })
      
      .catch(error=> console.log(`ha ocurrido un error al obtener UF : ${error}`))
  },[data])
  
  const handleOnSubmit = (event) => {
    event.preventDefault();

		const { nombre, email, telefono } = data 
    const message = `
			Nombre: ${nombre} 
			Email: ${email} 
			Telefono: ${telefono}
    `
    const info = {
      to:'contacto@haciendaelbarro.cl ',
      replyTo: email,
      subject:'Formulario Contacto',
      text:message,
      nombre: nombre,
      email: email,
      telefono:telefono,
    }
    setIsLoading(true)   

    axios.post('https://us-central1-firemailer.cloudfunctions.net/submitContactoFZ', info,{ headers: { "Access-Control-Allow-Origin": "*" }})
      .then(res => {
        console.log(`mensaje enviado: ${res.data}`)
        setIsLoading(false)
        setError('')
        setMessage('sus datos han sido enviados')
        setTimeout(() => setMessage(''),2000)
      })
      .catch(error => console.log(`ha ocurrido un error ${error}`))
    setData(INITIAL_STATE)
  }
  const { nombre, email, telefono } = data
  const isDisabled = nombre === '' || email === '' || telefono === '' 

  return(
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Input
          name="nombre"
          placeholder="Tu Nombre"
          value={nombre}
          onChange={handleOnChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="email"
          placeholder="Tu Email"
          value={email}
          onChange={handleOnChange}
          />
      </FormGroup>
      <FormGroup>
        <Input
          name="telefono"
          placeholder="Tu Telelfono"
          value={telefono}
          onChange={handleOnChange}
          />
      </FormGroup>
      {/* <FormGroup>
        <Input
          name="rut"
          placeholder="Tu Rut"
          value={rut}
          onChange={handleOnChange}
          />
      </FormGroup> */}
      {/* <FormGroup>
        <Input
          id="exampleSelect"
          name="casa"
          type="select"
          value={casa}
          onChange={handleOnChange}
        >
          {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
        </Input>
      </FormGroup> */}
        {isLoading ? 
          <span style={{fontSize:'16px', color:'black'}}>Enviando...</span> :
          <Button
            type="submit"
            disabled={isDisabled}
          >
            Enviar
          </Button>
        }
        { message && <span style={{color:'black', paddingLeft:'5px'}}>{ message }</span>}
        { error && <span style={{color:'black', paddingLeft:'5px'}}>{ error }</span>}  
    </Form>
  )
}
function Contacto() {
  const handleOnClick = () =>  window.open('https://api.whatsapp.com/send/?phone=56958580693')
  return (
    <div id="contacto" className="section bg-white">
        <Container>
            <Row>
              <Col>
                <h2 className="color-black">CONTACTO</h2>
                <div className='subraya bg-black'/>  
              </Col>
            </Row>
            <Row className="pt-5 pb-5">
                <Col sm="12" md="6">
                  <div className="d-flex ps-3">
                    <img src={Logo} style={{width:'150px', paddingRight:'10px'}} alt="logo"/>
                    {/* <img src={Logo} style={{width:'140px', objectFit:'contain'}} alt="logo"/> */}
                  </div>
                  <div className="pt-4 ps-3">
                    <h3>Información de Ventas</h3>
                    <div className="d-flex pb-3 pt-4">
                      <PhoneCall/><a className="ps-3" href="tel:+56992498605">+56 9 9249 8605</a>
                    </div>
                    <div className="d-flex pb-3">
                      <Email/> <a className="ps-3" href="mailto:contacto@haciendaelbarro.cl">contacto@haciendaelbarro.cl</a>
                    </div>
                    <div className="d-flex pb-3" onClick={ handleOnClick }>
                      <LogoWhatsapp width={36} height={36}/><a className="ps-3" href="https://api.whatsapp.com/send/?phone=56958580693">+56 9 5858 0693</a>
                    </div>
                  </div>
                </Col>
                <Col sm="12" md="6" className="pt-3 pt-md-0">
                  <Formulario/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contacto