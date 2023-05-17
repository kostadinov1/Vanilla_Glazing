import { baseURL } from "./baseURL"


export const getCompanyInfo = async () => {
    const url = `${baseURL}/api/services/company-info/1/`

    const response = await fetch(url)
    const companyInfo = await response.json()
    if (response.ok) {
        return companyInfo
    } else {
        throw companyInfo
    }
}