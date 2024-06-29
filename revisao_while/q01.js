import{get_number, print} from '../utils/util.js'

function main(){
    n = ''

    while(n != 0){
        n = get_number('Digite um número: ')
        let i = 1
        while(i <= n){
            if(n % i == 0){
                print(`Divisores de ${n}: ${i}`)
            }
            i++
        }
    }
}
main()