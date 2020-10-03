export class UserAuth {
  constructor(
    public userId: string,
    // tslint:disable-next-line:variable-name
    private _authorizationToken: string,
  ) {
  }

  get authorizationToken(): string {
    if (!this._authorizationToken) {

      return null;
    }
    return this._authorizationToken;
  }

}
