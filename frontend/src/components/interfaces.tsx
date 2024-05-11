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

export interface Trending {
    id: number
    name: string
    image: string
    originalPrice: string
    oldPrice: string
    sizes: string[]
}
