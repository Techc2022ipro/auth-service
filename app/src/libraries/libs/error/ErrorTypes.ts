export type ErrorTypes = {
    DuplicateUser(): Promise<string>
    FailedAuthorization(): Promise<string>
    UserNotFound(): Promise<string>
}