/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
import { useRef, useState } from 'react';

import { FormikHelpers } from 'formik/dist/types';

import apiRequest from '../../services';
import exceptionSwitch from './exceptionSwitch';

export interface IDoRequestActions<input, output> {
    doRequest: (data: Omit<input, 'IdEmpreendimento'>) => Promise<output>;
    doRequestComInputPossuindoIdEmpreendimento: (data: input) => Promise<output>;
    reset: () => void;
    loading: boolean;
    doFormikRequest: (data: input, { setSubmitting, resetForm }: FormikHelpers<input>) => Promise<{ data: input, result: output }>;
}

export const SYNC_MESSAGE_ERROR = 'Não existe uma inspeção aberta para ser feita a sincronização..';
export const INSPECTION_OPEN_MESSAGE_ERROR = 'Ops..! Não existe nenhuma inspeção aberta para a estrutura deste registro..';

const useDoRequest = <input, output>(requestInfo: (a: typeof apiRequest) => ((data: input) => Promise<output>), hideErrorMessage?: boolean): IDoRequestActions<input, output> => {
    const [loading, setLoading] = useState(false);
    const requestParamsRef = useRef<Omit<input, 'IdEmpreendimento'> | null>(null);

    const doRequest = async (data: Omit<input, 'IdEmpreendimento'>): Promise<output> => (
        new Promise(async (resolve, reject) => {
            try {
                requestParamsRef.current = data;
                setLoading(true);
                const result = await requestInfo(apiRequest)(data as input);
                setTimeout(() => setLoading(false), 500);
                resolve(result);
            } catch (exception: any) {
                console.log('error', exception);
                console.error(exception);

                //QUANDO seçãoe expirar
                // if (exception?.response?.status === 401 && !secaoExpiradaMessage) {
                //     secaoExpiradaMessage = true;
                //     alert('Sessão expirada, aperte ok para fazer login novamente');
                //     window.open(RequestUtils.getLoginUrl(), '_self');
                //     localStorage.clear();
                //     sessionStorage.clear();
                // }
                setLoading(false);
                if (exception.message === 'canceled') { return; }
                if (exception.response?.data.Message === SYNC_MESSAGE_ERROR) {
                    reject(exception.response?.data.Message);
                } else if (exception.response?.data.Message === INSPECTION_OPEN_MESSAGE_ERROR) {
                    reject(exception.response?.data.Message);
                } else if (exception.response?.data?.Errors?.ERR400?.length > 0 && !hideErrorMessage) {
                    exceptionSwitch(exception.response?.data, exception.response?.data.Errors.ERR400.join(' | '));
                } else if (exception.response?.data?.Errors?.ERRWarning?.length > 0 && !hideErrorMessage) {
                    exceptionSwitch(exception.response?.data, exception.response?.data.Errors.ERRWarning.join(' | '));
                } else if (exception.response.data.Errors && exception.response?.data.Errors[''] !== undefined) {
                    exceptionSwitch(exception.response?.data, exception.response?.data.Errors[''][0]);
                } else if (!hideErrorMessage) {
                    exceptionSwitch(exception.response?.data, "Ops... Um erro inesperado ocorreu");
                    reject(`Ocorreu um erro -> ${(exception)}`);
                }
            }
        })
    );

    const doRequestComInputPossuindoIdEmpreendimento = async (data: input): Promise<output> => (
        new Promise(async (resolve, reject) => {
            try {
                requestParamsRef.current = data;
                setLoading(true);
                const result = await requestInfo(apiRequest)(data);
                setTimeout(() => setLoading(false), 500);
                resolve(result);
            } catch (exception: any) {
                setLoading(false);
                if (!hideErrorMessage) {
                    exceptionSwitch(exception.response?.data, "Ops... Um erro inesperado ocorreu'");
                }
                reject(`Ocorreu um erro -> ${(exception)}`);
            }
        })
    );

    const doFormikRequest = (data: input, { setSubmitting, resetForm, setErrors }: FormikHelpers<input>): Promise<{ data: input, result: output }> => (
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (resolve, reject) => {
            try {
                requestParamsRef.current = data;
                setSubmitting(true);
                const result = await requestInfo(apiRequest)(data);
                const realResult = {
                    result,
                    data,
                };
                resetForm();
                resolve(realResult);
            } catch (exception: any) {
                setErrors(exception.response.data.Errors);
                setSubmitting(false);
                reject(exception.response.data.Errors);
            }
        })
    );

   

    const reset = () => {
        setLoading(false);
        requestParamsRef.current = null;
    };

    return {
        doRequest,
        doRequestComInputPossuindoIdEmpreendimento,
        doFormikRequest,
        reset,
        loading,
    };
};

export default useDoRequest;
