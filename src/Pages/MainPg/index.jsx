import lab from "../../img/lab.jpg";
import insta from "../../img/insta.png";
import facebook from "../../img/facebook.png";
import { useState } from "react";
import { listExames } from "../../api";
import Swal from "sweetalert2";

const MainPg = () => {
  const [cd_pedido, set_pedido] = useState("");
  const [cpf, setCpf] = useState("");

  async function openLaudo(e) {
    e.preventDefault();
    
      Swal.fire({
        icon: "success",
        title: "Laudo irá aparecer em breve!",
        text: "É só um teste, o backend não foi finalizado!",
      });
  }

  return (
    <div className="content">
      <div className="triagleMPage">
        <div className="contentHeaderTriagle">
          <h1>BIOVIDA SANTA CASA</h1>
        </div>
      </div>
      <div className="explainSection">
        <img src={lab} />
        <p>
          Este é o sistema do Laboratório BIOVIDA Santa Casa de Misericórdia de
          Sobral. Através dele você poderá realizar a busca pelo seu exame sem a
          necessidade de se deslocar até o hospital. Além de agilizar os
          serviços hospitalares, também será mais pratico para você.
        </p>
      </div>
      <div className="HeaderSquare"></div>
      <div className="contentHeaderSquare">
        <div className="optionsManifest">
          <div className="consultaManifest" id="logar">
            <label>
              <b>Verificar Exame</b>
            </label>
            <form onSubmit={openLaudo}>
              <div className="contentInputsManifest">
                <label>Pedido</label>
                <input
                  type="text"
                  onChange={(e) => {
                    set_pedido(e.target.value);
                  }}
                />
              </div>
              <div className="contentInputsManifest">
                <label>CPF</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setCpf(e.target.value);
                  }}
                />
              </div>

              <button>Buscar</button>
            </form>
            {/* <label>*Se você fez uma Manifestação anônima e não sabe o protocolo e a senha, a consulta de andamento só pode ser feita por telefone ou pessoalmente, na Ouvidoria. </label> */}
          </div>
        </div>
      </div>
      <div className="footerContent">
        <div className="footer">
          <label>© T.I SCMS - Todos os direitos reservados</label>
          <div className="SocialMedias">
            <a href="https://www.facebook.com/stacasadesobral">
              <img src={insta} width={"30px"} />
            </a>
            <a href="https://www.instagram.com/santacasasobral/">
              <img src={facebook} width={"30px"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPg;
