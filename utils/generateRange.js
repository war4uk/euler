export default function generateRange(count) {
  return [...Array(count + 1).keys()].slice(1);
}
