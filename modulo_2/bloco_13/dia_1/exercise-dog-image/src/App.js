import React from "react";

// Passo 2: 
// Como App precisa exibir o doguinho atual, ele inicializa this.state com um objeto incluindo a doguinho atual.
// Mais tarde, atualizaremos este state.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      array: []
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  // Passo 4:
  // Quando a saída do App é inserida no DOM, o React chama o método do ciclo de vida componentDidMount().
  // Dentro dele, o componente App pede ao navegador para chamar o método fetchDog().
  componentDidMount() {
    if (localStorage.dogURL) {
      const parseStorage = JSON.parse(localStorage.dogURL);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      return this.setState({ data: { message: lastDog } });
    }
    this.fetchDog();
  }

  // Passo 5.1:
  // shouldComponentUpdate() é executado antes da renderização, quando novas props ou state são recebidos.
  // O valor default é true. Este método não é chamado na renderização inicial ou quando forceUpdate() é usado.
  // Em nosso app, a cada tentativa de atualização do componente, é verificado se o campo 'message' tem a string
  // 'terrier'. Se sim, não atualiza o componente pois retorna false.
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  // Passo 5.2:
  // componentDidUpdate() é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado
  // pelo initial render. Em nosso app, é armazenada a url da última imagem gerada no localStorage e
  // exibido um alert com a raça do doguinho.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      const dogBreed = this.state.data.message.split("/")[4];
      return alert(dogBreed);
    }
    // localStorage.setItem("dogURL", this.state.data.message);
    localStorage.setItem("dogURL", JSON.stringify(this.state.array));
  }

  // Passo 5:
  // Dentro do método fetchDog(), o componente App faz a atualização de UI chamando setState() com um objeto
  // contendo o doguinho atual. Graças à chamada setState(), o método render() será diferente e, portanto,
  // a saída de renderização incluirá o doguinho atualizado. React atualiza o DOM de acordo.
  // MAS, há uma averiguação importante para que ocorra essa atualização!
  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  saveData() {
    const {
      data: { message },
      name,
      array
    } = this.state;
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: "" });
  }

  // Passo 3:
  // React chama então o método render() do componente App. É assim que o React aprende o que deve ser
  // exibido na tela. React em seguida, atualiza o DOM para coincidir com a saída de renderização do App.
  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={this.fetchDog}>Novo doguinho!</button>
        <div>
          {/* <img src={this.state.data.message} /> */}
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="digite o nome do doguinho"
          />
          <button onClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={this.state.data.message} alt={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default App;

// Obs.: se o componente App fosse removido do DOM, o React chamaria o método do ciclo de vida
// componentWillUnmount() para interrupção do método fetchDog().
