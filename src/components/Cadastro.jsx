import { useState } from "react";

export default function Cadastro() {
  const [productName, setProductName] = useState("");
  const [quantify, setQuantify] = useState(0);

  return (
    <div className=" bg-slate-600 aspect-square w-full flex flex-col">
      <div className="">
        <form>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nome Produto"
          />
          <input
            type="number"
            value={quantify}
            onChange={(e) => setQuantify(e.target.value)}
            placeholder="Quantidade"
          />
          <button>Enviar</button>
        </form>
        <div>
          <div>Produto : {productName}</div>
          <div>Quantidade : {quantify}</div>
        </div>
      </div>
    </div>
  );
}
