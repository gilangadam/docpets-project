import axios from "axios";
import { baseUrl } from "./index";

export async function apiGetClinicDetail(headers, id) {
    let clinicId = await localStorage.getItem("clinicId");

    return axios({
        method: "GET",
        url: baseUrl + "klinik/getKlinikById/" + clinicId,
        headers,
    });
}
