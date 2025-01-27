function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log(`A conta não contém saldo suficiente: R$:${this.saldo.toFixed(2)}`)
        return;
    };

    this.saldo -= valor
    this.Saldo()
}

Conta.prototype.depositar = function(valor) { 
    this.saldo += valor
    this.Saldo()
}

Conta.prototype.Saldo = function () {
    console.log(`Ag/c: ${this.agencia} / ${this.conta} `
        +`Saldo: R$${this.saldo.toFixed(2)}`
    )
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.contructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
       console.log(`A conta não contém saldo suficiente: R$:${this.saldo.toFixed(2)}`)
       return;
    }

    this.saldo -= valor
    this.Saldo()
}

function ContaPoupanca(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.contructor = ContaPoupanca;

const contaC = new ContaCorrente(11, 22, 0, 100)
contaC.depositar(10)
contaC.sacar(110)
contaC.sacar(1)

console.log()

const contaP = new ContaPoupanca(12, 33, 0)
contaP.depositar(10)
contaP.sacar(110)