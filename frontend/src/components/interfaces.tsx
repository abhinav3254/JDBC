export interface GenderCategory {
    categories: Category[]
}

export interface Category {
    name: string
    subcategories: string[]
}

export interface Brand {
    id: number
    name: string
    logo: string
}
