export const isBelow = (value: number, max: number) => value < max
export const isAbove = (value: number, min: number) => value > min
export const isBetween = (value: number, min: number, max: number) => isAbove(min, value) && isBelow(max, value)
