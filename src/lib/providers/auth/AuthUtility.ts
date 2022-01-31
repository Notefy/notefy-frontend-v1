export interface useFetchInterface {
    body: any;
}

export const signUp = async ({ body }: useFetchInterface) => {
    const fetchURl = process.env.REACT_APP_BACKEND + "auth/register/";
    try {
        const response = await fetch(fetchURl, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();

        if (!response.ok) {
            // make the promise be rejected if we didn't get a 2xx response
            if (response.status !== 201) {
                throw new Error("Not 2xx response " + data.msg);
            }
            throw new Error("Not 2xx response");
        }

        return data;
    } catch (e) {
        console.error(e);
    }
};

export const logIn = async ({ body }: useFetchInterface) => {
    const fetchURl = process.env.REACT_APP_BACKEND + "auth/login/";
    try {
        const response = await fetch(fetchURl, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();

        if (!response.ok) {
            // make the promise be rejected if we didn't get a 2xx response
            if (response.status !== 201) {
                throw new Error("Not 2xx response " + data.msg);
            }
            throw new Error("Not 2xx response");
        }

        return data;
    } catch (e) {
        console.error(e);
    }
};
