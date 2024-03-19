import instance from "./axios"

const URL = "/auth"

export const loginUserAuth = async (body) => {
    const user = await instance.post(`${URL}/login`, body);

    return user;
}