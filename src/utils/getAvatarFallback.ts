export const getAvatarFallback = (name: string): string =>
  name
    .split(' ')
    .map((elem) => elem[0])
    .join('')
    .toUpperCase()