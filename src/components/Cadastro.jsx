import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore"
export default function Cadastro() {

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBJfoGxu823gRq11CJsxHdMdgBDIHPA408",
    authDomain: "estoque-6554a.firebaseapp.com",
    projectId: "estoque-6554a",
  });

  const db = getFirestore(firebaseApp);
  const productCollectionRef = collection(db, "Estoque");




  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef)
      console.log(data.docs.map(doc => ((doc) => ({ ...doc.data(), id: doc.id }))));
    };
    getProducts()
  }, []);


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
