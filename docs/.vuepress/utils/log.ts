/**
 * @description: 输出自动对齐的log
 * @param {string} title
 * @param {string} description
 * @param {Array<object>} data
 * @return {void}
 */
export const log = (
  title: string,
  description: string,
  data: Array<object>
): void => {
  console.group(
    `%c${title}${description === '' ? '' : '%c' + description}`,
    'background:#35495e; padding: 2px 4px; border-radius: 3px 0 0 3px; color: #fff;font-family: sans-serif;',
    'background:#41b883 ; padding: 2px 4px; border-radius: 0 3px 3px 0;  color: #fff; font-family: sans-serif;'
  )

  data.forEach((val) => {
    for (const prop in val) {
      if (val.hasOwnProperty(prop)) {
        if (val[prop] === void 0 || val[prop].length === 0) continue
        console.log(
          `%c${prop}${'\u0020'.repeat(18 - prop.length)}: %c${val[prop]}`,
          'font-size:13px;',
          'font-size:13px;color: #45B744;'
        )
      }
    }
  })
  console.groupEnd()
}
