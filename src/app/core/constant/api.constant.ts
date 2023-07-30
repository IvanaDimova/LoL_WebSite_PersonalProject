import { environment } from "../../../environments/environment";

let basePath = environment.APIPath;

export const APIConstant = {
    basePath: basePath,
    login: `${basePath}auth/login`,
}
