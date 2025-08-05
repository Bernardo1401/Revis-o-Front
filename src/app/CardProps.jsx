export default function CardProps({ nome, email, idade }) {
    const nomeExibido = nome ? nome : "Nome não informado";
    const emailExibido = email ? email : "Email não informado";
    const idadeExibida = idade ? `${idade} anos de idade` : "Idade não informada";
  
    return (
      <div>
        <p>Nome: {nomeExibido}</p>
        <p>Email: {emailExibido}</p>
        <p>Idade: {idadeExibida}</p>
        <hr />
      </div>
    );
  }