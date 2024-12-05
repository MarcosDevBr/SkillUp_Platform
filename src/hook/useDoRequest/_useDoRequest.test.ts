import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

// import MockAdapter from 'axios-mock-adapter';

import RequestUtils from './requestUtils';
import useDoRequest from './useDoRequest';

// describe('doRequest Hook', () => {
//     beforeAll(() => RequestUtils.setAuthToken('FakeTokenHere'));
//     it('Should do a request', async () => {
//         const apiMock = new MockAdapter(RequestUtils.dadosEstruturaApi);
//         const { result } = renderHook(() => useDoRequest((api) => api.estrutura.ObterEstrutura));

//         apiMock.onGet('Estrutura/ObterEstrutura').replyOnce(200, { IdEstrutura: 1 });
//         let obterRequest;
//         await act(async () => { await result.current.doRequest({ IdEstrutura: 1 }).then((r) => { obterRequest = r; }); });

//         expect(obterRequest).toHaveProperty('IdEstrutura', 1);
//     });

//     it('Should throw an Error, when api reponse is not 200', async () => {
//         const apiMock = new MockAdapter(RequestUtils.dadosEstruturaApi);
//         const { result } = renderHook(() => useDoRequest((api) => api.estrutura.ObterEstrutura));

//         apiMock.onGet('Estrutura/ObterEstrutura').replyOnce(404);
//         let obterRequest;

//         await act(async () => { await result.current.doRequest({ IdEstrutura: 1 }).catch((r) => { obterRequest = r; }); });
//         expect(obterRequest).toEqual('Ocorreu um erro -> Error: Request failed with status code 404');
//     });
// });
