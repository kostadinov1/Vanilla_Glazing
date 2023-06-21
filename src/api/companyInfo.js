import { baseURL } from "./baseURL"


export const getCompanyInfo = async () => {
    // THIS URL NEEDS TO BE AT THE EXACT NUMBER OF ID 3!
    // TO MATCH THE DATABASE OBJECT ID
    const url = `${baseURL}/api/services/company-info/3/`

    const response = await fetch(url)
    const companyInfo = await response.json()
    if (response.ok) {
        return companyInfo
    } else {
        throw companyInfo
    }
}