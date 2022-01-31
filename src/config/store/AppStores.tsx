import { AuthProvider } from "lib/providers/auth";
import { FilesProvider } from "lib/providers/filesList";
import { NoteProvider } from "lib/providers/notes";
import { FC } from "react";

const AppStores: FC = ({ children }) => {
    return (
        <>
            <AuthProvider>
                <FilesProvider>
                    <NoteProvider>{children}</NoteProvider>
                </FilesProvider>
            </AuthProvider>
        </>
    );
};

export default AppStores;
