const arrayUpdater = <T,> (index: number, value: T): ((prev: T[]) => T[]) =>
  prev => prev.map((v,i) => (i === index) ? value : v);

export {arrayUpdater};
