function CadastroModels(
  id,
  nome,
  telefone,
  email,
  nascimento,
  empresa,
  cargo,
  endereco,
  obs
) {
  this.id = id;
  this.nome = nome;
  this.telefone = telefone;
  this.email = email;
  this.nascimento = nascimento;
  this.empresa = empresa;
  this.cargo = cargo;
  this.endereco = endereco;
  this.obs = obs;

  return {
    id: id,
    nome: nome,
    telefone: telefone,
    email: email,
    nascimento: nascimento,
    empresa: empresa,
    cargo: cargo,
    endereco: endereco,
    obs: obs,
  };
}

export default CadastroModels;
