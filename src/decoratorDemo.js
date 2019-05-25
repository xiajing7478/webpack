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

function log(target) {
  const _target = new target()
  _target.fn()
}
