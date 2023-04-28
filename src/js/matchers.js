export default function healthSort(arr) {
  const sortArr = arr.sort((a, b) => (a.health > b.health ? -1 : 1));
  return sortArr;
}