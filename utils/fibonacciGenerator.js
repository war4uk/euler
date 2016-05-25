export default function* fibonacci() {
  let prePrev = 1;
  let prev = 1;

  for (; ;) {
    const current = prev;
    prev = prePrev;
    prePrev = prev + current;

    yield current;
  }
}
