import{question} from 'readline-sync'

export function get_number(mensagem){
    return Number(question(mensagem))

}

export function positive_number(mensagem){
    const numero = get_number(mensagem)

    if(numero <= 0 ){
        print(`Valor inválido!`)
        return positive_number(mensagem)
    }
    return numero
}

export function print(mensagem){
    console.log(mensagem)
}

export function maior_numero(numero1, numero2){
    if (numero1 > numero2){
        return maior = numero1
    } else if(numero2 > numero1){
        return maior = numero2

    } else {
        return 'Os numeros são iguais'
        
    }
}
export function get_number_min(mensagem, min){
    const numero = get_number(mensagem)
  
    if (numero < min){
      print('Número inválido! Digite novamente')
      return get_number_min(mensagem, min)
    }
  
    return numero
  }