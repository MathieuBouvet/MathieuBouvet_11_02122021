export default function modulo(x, range) {
  const topped = x % range;
  return topped < 0 ? topped + range : topped;
}
