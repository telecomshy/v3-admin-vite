export interface LoginRequestData {
  /** admin 或 editor */
  username: string
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
  /** 验证码对应的uuid */
  uuid: string
}

export type LoginCodeResponseData = ApiResponseData<{ uuid: string; captchaUrl: string }>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
