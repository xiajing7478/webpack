/**
 * @author xiajing
 * @date 2019/5/25 20:12
 */
let url = ''
if (DEV !== 'production') {
  url = 'http://localhost:8888'
} else {
  url = 'https://www.baidu.com'
}
console.log('url', url)
