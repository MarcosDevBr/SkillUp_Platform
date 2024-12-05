export interface IUsuarioLogadoStorage {
    IdUsuario: number,
    Nome: string,
    Email: string,
    Telefone: string,
    CaminhoVirtualImagem: string,
    IdIdioma: number | null,
}

export interface IConfiguracaoSessao{
    MainMenuVisible: boolean;
}