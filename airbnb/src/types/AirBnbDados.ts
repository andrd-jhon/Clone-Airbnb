interface AirBnbApi {
    accomodation: 
}

export interface Accomodation {
    id: string
    title: string
    date: string
    testimonials: Testimonials[]
    hasBadge: boolean
    host: string
    slug: string
    location: Location
    price: number
    rating: number
    photos: Photo[]
}

export interface Testimonials {

}

export interface Photo {

}