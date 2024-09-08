interface IAppConfig {
    API_URL: string;
}

const appConfig: IAppConfig = {
    API_URL: import.meta.env.VITE_API_URL || "",
};

export default appConfig;