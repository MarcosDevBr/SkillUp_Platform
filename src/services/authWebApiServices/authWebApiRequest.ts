
import RequestUtils from '../../hook/useDoRequest/requestUtils';
import { IObterInformacoesServicoPortalOutput } from './authWebApiInterface';

export default class authWebApiRequest {

    static ObterInformacoesServicoPortal(): Promise<IObterInformacoesServicoPortalOutput> {
        return RequestUtils.authApi.get('AuthWebAPI/ObterInformacoesServicoPortal').then((response) => response.data);
    }
}
