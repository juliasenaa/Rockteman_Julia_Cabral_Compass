import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)

    })
   it('Deve somar -4 e 5 resultando em 1',() => {
    let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)

   }) 
})


describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)

    })

    describe('Teste de divisão', () => {
        it('Deve dividir 4 e 2 resultando em 2', () => {
            let resultado = Calculadora.div(4, 2)
            expect(resultado).to.be.eq(2)
        })

    describe('Teste de multiplicação', () => {
        it('Deve multiplicar 9 e 7 resultando em 63', () => {
            let resultado = Calculadora.mul(9, 7)
            expect(resultado).to.be.eq(63)
        })
    })
    })

})
