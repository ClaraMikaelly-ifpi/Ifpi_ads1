import { get_number, print } from '../utils/util.js'

function main(){
    let N = get_number('Digite um número: ')

    for(let i = 1; i <= N; i++ ){
        if(i % 2 == 0)
        print(i)
    }
}
main()