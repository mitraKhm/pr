export interface Donut {
    id: string | number
    name: string
    icon: string
    price: number
    promo?:'limited' | 'new',
    description:string
}
