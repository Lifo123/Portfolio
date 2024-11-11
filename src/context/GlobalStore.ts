import { atom, deepMap } from 'nanostores'

export const $example = atom('Template Store')
export const $userInfo = deepMap({
    name: 'Template',
    age: 18,
    sex: 'Male',
    address: {
        city: 'Beijing',
        country: 'China'
    },
    nose: 'wasa'
})

