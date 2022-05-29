import { AppInfo } from "supertokens-node/lib/build/types";
export declare const ConfigInjectionToken = "ConfigInjectionToken";
export declare type AuthModuleConfig = {
    appInfo: AppInfo;
    connectionURI: string;
    apiKey?: string;
};
