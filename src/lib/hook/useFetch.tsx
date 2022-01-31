import { useState, useEffect, useCallback } from "react";

export type apiStatus = "loading" | "success" | "error";

export interface useFetchInterface {
    url: string;
    method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
    body: any;
}

const useFetch = ({ url, body }: useFetchInterface) => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState<apiStatus>();

    const fetchData = useCallback(async () => {
        setStatus("loading");
        try {
            const response = await fetch(url, {
                method: "PUT",
                body: body,
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                // make the promise be rejected if we didn't get a 2xx response
                throw new Error("Not 2xx response");
            }
            const data = await response.json();
            setData(data);
            setStatus("success");
        } catch (e) {
            console.error(e);
            setStatus("error");
        }
    }, [url, body]);

    useEffect(() => {
        if (!url) return;
        fetchData();
    }, [url, fetchData]);

    return { status, data };
};

export default useFetch;
