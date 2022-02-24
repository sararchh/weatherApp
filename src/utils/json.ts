export function getStorageParse(key: string) {
  const datagetted = localStorage.getItem(key);
  return datagetted ? JSON.parse(datagetted) : null;
}