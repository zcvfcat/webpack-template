export const root = document.getElementById('root')
console.log(root)

interface a {
  A: number
}

class A implements a {
  A = 10
  static test = 1
}

console.log(A.test)
