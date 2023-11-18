import useSWR from "swr";
import {BASE_URL} from "../../public/assets/constants/constants";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function fetchVehicleListing () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading } = useSWR(`${BASE_URL}/vehicle/listing`, fetcher)

    return {
        vehicles: data,
        isLoading,
        isError: error
    }
}