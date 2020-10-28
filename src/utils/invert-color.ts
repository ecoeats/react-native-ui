export function invertHex(hex: string) {
  // eslint-disable-next-line no-bitwise
  return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
}
