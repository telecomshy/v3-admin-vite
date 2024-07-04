export interface LoginRequestData {
  /** admin 或 editor */
  username: "admin" | "editor"
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
  /** 用户uuid */
  uuid: string
}

export type LoginCodeResponseData = ApiResponseData<{ uuid: string; captchaUrl: string }>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
