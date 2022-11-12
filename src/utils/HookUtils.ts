/**
 * setStateで `prev[i] = value` したいときのupdater関数を提供する
 * @param index 更新するindex
 * @param value 更新後のvalue
 * @returns updater関数
 */
const arrayUpdater = <T,> (index: number, value: T): ((prev: T[]) => T[]) =>
  prev => prev.map((v,i) => (i === index) ? value : v);

export {arrayUpdater};
