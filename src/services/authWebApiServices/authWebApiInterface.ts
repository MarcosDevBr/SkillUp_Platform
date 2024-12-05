export interface IUsuarioDto {
    IdUsuario: number;
    Nome: string;
    Email: string;
    Telefone?: string;
    IdLinguagem: number;
    CaminhoVirtualImagem?: string;
}

export interface IListarUsuarioPorEmpreendedorOutput{
    ArrUsuario: IUsuarioDto[];
}

export interface IObterInformacoesServicoPortalOutput {
    Usuario: IUsuarioDto;
}