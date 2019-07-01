import add from './add';

export default function inc(a) {
  return a + add(0, 1);
}
