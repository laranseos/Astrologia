import React from "react";
import Aries from "./assets/aries.png"
import Touro from "./assets/taurus.png"
import Gemeous from "./assets/gemini.png"
import Cancer from "./assets/cancer.png"
import Leao from "./assets/leo.png"
import Vigrem from "./assets/virgo.png"
import Libra from "./assets/libra.png"
import Escopiao from "./assets/scorpio.png"
import Sagitario from "./assets/sagittarius.png"
import Capricornino from "./assets/capricorn.png"
import Aquario from "./assets/aquarius.png"
import Peices from "./assets/pisces.png"
function Landing() {
  return (
    <div className="bg-[url('assets/fundo.jpg')] bg-cover h-[120vh] bg-no-repeat text-center" >
        <div className="font-bold text-4xl py-2">TESTE DOS SIGNOS!</div>
        <div className=" text-2xl mt-2">Descubra o atalho para seguir e ter um futuro abundante no <span className="font-bold bg-[#ffff45]">Amor,</span></div>
        <div><span className="font-bold bg-[#ffff45] text-2xl">Saúde, Sorte, Finanças e muito mais!</span></div>
        <div className=" text-2xl mt-12">Clique <span className="font-bold bg-[#ffff45]">ABAIXO</span> no <span className="font-bold bg-[#ffff45]">SEU SIGNO</span>:</div>
        <div className="mt-12 grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-2 sm:w-[500px] md:w-[660px] w-[500px] justify-center items-center ml-auto mr-auto">
          
              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                    <img src={Aries} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                    <div>ÁRIES</div>
                    <div className="text-md font-bold">21/03 E 20/04</div>
              </a>
              

              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Touro} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>TOURO</div>
                  <div className="text-md font-bold">21/04 E 20/05</div>
              </a>
              
              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Gemeous} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>GÊMEOS</div>
                  <div className="text-md font-bold">21/05 E 20/06</div>
              </a>
              
              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Cancer} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>CÂNCER</div>
                  <div className="text-md font-bold">21/06 E 21/07</div>
              </a>
         
          
              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Leao} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>LEÃO</div>
                  <div className="text-md font-bold">22/07 E 22/08</div>
              </a>

              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Vigrem} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>VIRGEM</div>
                  <div className="text-md font-bold">23/08 E 22/09</div>
              </a>

              <a href="/disponivel-onlineconsulta" className="  text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Libra} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>LIBRA</div>
                  <div className="text-md font-bold">23/09 E 22/10</div>
              </a>

              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Escopiao} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>ESCORPIÃO</div>
                  <div className="text-md font-bold">23/10 E 21/11</div>
              </a>
         
          
              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Sagitario} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>SAGITÁRIO</div>
                  <div className="text-md font-bold">22/11 E 21/12</div>
              </a>

              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Capricornino} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>CAPRICÓRNIO</div>
                  <div className="text-md font-bold">22/12 E 20/01</div>
              </a>

              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Aquario} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>AQUÁRIO</div>
                  <div className="text-md font-bold">21/01 E 19/02</div>
              </a>

              <a href="/disponivel-onlineconsulta" className=" text-white shadow-md shadow-black text-lg bg-gradient-to-r from-amber-950 to-amber-700 w-40 h-40 border-white border-2 items-center text-center justify-center">
                  <img src={Peices} className="w-20 h-20 ml-auto mr-auto mb-2" alt="aries" />
                  <div>PEIXES</div>
                  <div className="text-md font-bold">20/02 E 20/03</div>
              </a>
         
        </div>
        {/* <div className="text-3xl mt-12">Clique <span className=" font-bold">ACIMA</span></div>
        <div className="text-3xl">no <span className="font-bold">SEU SIGNO</span>:</div> */}
        {/* <div className="mt-40 text-xl">
            <div>Ao se cadastrar e prosseguir para as próximas páginas você está concordando com os termos de nossa Política de Privacidade e Termos de Uso.</div>
            <div className="mt-12">A Senhora do Destino produz e entrega publicações periódicas semanais e o material reflete única e exclusivamente a opinião do profissional e foi elaborado de forma independente.</div>
            <div>Você pode cancelar sua inscrição a qualquer momento.</div>
            <div>Relacionamento com o assinante: contato@asenhoradodestino.com</div>
            <div>Copyright© 2020 - São Paulo, SP</div>
        </div> */}
       
    </div>
  );
}

export default Landing;
