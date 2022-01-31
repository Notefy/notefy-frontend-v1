import {
    onCreateFilesInterface,
    onGetFilesInterface,
    onUpdateFilesInterface,
} from "./FilesConstants";

export interface useFetchInterface {
    body: any;
}

export interface AuthenticationHeaderInterface {
    authorizationToken: string;
}

export type getFilesInterface = onGetFilesInterface &
    AuthenticationHeaderInterface;
export const getFiles = async ({
    fileID,
    authorizationToken,
}: getFilesInterface) => {
    let fetchURl = process.env.REACT_APP_BACKEND + "file/";
    if (fileID) fetchURl = fetchURl + fileID + "/";
    try {
        const response = await fetch(fetchURl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authorizationToken}`,
            },
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

export type createFilesInterface = {
    body: onCreateFilesInterface;
} & AuthenticationHeaderInterface;
export const createFile = async ({
    body,
    authorizationToken,
}: createFilesInterface) => {
    let fetchURl = process.env.REACT_APP_BACKEND + "file";
    try {
        const response = await fetch(fetchURl, {
            method: "Post",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authorizationToken}`,
            },
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

export type updateFilesInterface = {
    fileID: string;
    body: onUpdateFilesInterface;
} & AuthenticationHeaderInterface;
export const updateFiles = async ({
    fileID,
    body,
    authorizationToken,
}: updateFilesInterface) => {
    let fetchURl = process.env.REACT_APP_BACKEND + "file/" + fileID + "/";
    console.log(body);
    try {
        const response = await fetch(fetchURl, {
            method: "PATCH",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authorizationToken}`,
            },
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

export const deleteFiles = async ({ body }: useFetchInterface) => {};
