const root = document.getElementById('root')
console.log(root)

interface a {
  A: number
}

class A implements a {
  A: number = 10
  static test: number = 1
}

console.log(A.test)
