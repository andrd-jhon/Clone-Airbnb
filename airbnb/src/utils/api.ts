import { AirBnbApi } from "@/types/AirBnbDados"

export async function fetchData (): Promise<AirBnbApi> {
    try {
        const response = await fetch('https://web.codans.com.br/airbnb')
        const dados = (await response.json()) as AirBnbApi
        return dados

    }
    catch (e) {
        console.log(e)
        throw e
    } 
}