import { IConfiguracaoSessao } from "../interfaces/localStorage";

export interface ILocalStorage {
  configuracaoSessao: IConfiguracaoSessao;
}

const useLocalStorage = () => {
  const getItem = <T extends keyof ILocalStorage>(key: T): ILocalStorage[T] | null => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };

  const setItem = <T extends keyof ILocalStorage>(key: T, data: ILocalStorage[T]) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeItem = (key: keyof ILocalStorage) => {
    localStorage.removeItem(key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return {
    clear,
    getItem,
    setItem,
    removeItem,
  };
};

export default useLocalStorage;
