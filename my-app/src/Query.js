import { gql } from '@apollo/client'

const newAholi = gql`
mutation newaholi($name:String! $age:Int!){
    newaholi(name:$name, age:$age){
      id
      name
      age
    }
  }
`

const AholiAge = gql`
query aholi($ageO:Int! $ageT:Int!){
    aholi(ageO:$ageO ageT:$ageT){
      id
      name
      age
    }
  }
`

export {
    newAholi,
    AholiAge
}
