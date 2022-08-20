import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Modal } from "../../components/Modal";

export function Catalogo (){
  return(
    <div>
        <Container>
         <Header/>
         <Main/>
         <Modal/>
       </Container>
    </div>
  )
}
