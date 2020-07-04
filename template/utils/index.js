export const last = array => array[array.length - 1]

export const lastProperty = obj => obj[Object.keys(obj).length - 1]

export const prop = string => obj => obj[string]

export const equal = x => y => x === y

export const removeById = elementId => ({ id }) => id !== elementId

export const isString = x => typeof x === 'string'

export const isNull = x => x === null

export const isNumber = x => typeof x === 'number'

export const isBoolean = x => typeof x === 'boolean'

export const isObject = x => typeof x === 'object'

export const some = (...fns) => x => fns.some(fn => fn(x))

export const oneOf = (...xs) => y => xs.find(x => y === x)

export const isEmpty = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object

export const sign = num => num >= 0

export const snakeCaseToCamelCase = value => value.replace(/_\w/g, m => m[1].toUpperCase())

export const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

export const trace = tap(console.log)

export const on = promise => promise.then(response => [response, null]).catch(error => [null, error])

export const objectLength = obj => typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length

export const clamp = (min, max) => value => value < min ? min : value > max ? max : value

// eslint-disable-next-line no-undef
export const devmode = () => !!webpackHotUpdate

export const echo = key => console.log(`${key}`, key)

export const intNumber = (num, locale, digits = 2) => new Intl.NumberFormat(convertLocale(locale), { maximumSignificantDigits: digits }).format(num)
