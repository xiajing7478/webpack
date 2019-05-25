/**
 * @author xiajing
 * @date 2019/5/25 15:34
 */
@log
class C {
  c = 5;
  fn = () => {
    console.log('this is decorator........')
  }
}

let c = new C()
console.log(c.c)

function log(target) {
  const _target = new target()
  _target.fn()
}
