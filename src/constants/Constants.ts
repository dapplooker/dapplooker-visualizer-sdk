class Constants {
  public get chartTableHeader(): string {
    return 'Chart Data';
  }

  public get errorMessage(): string {
    return 'There was an error while parsing the request. Please try again!!';
  }

  public get errorObj(): string {
    return JSON.stringify({
      msg: 'Exception getting result from DappLooker API, Failed to fetch',
    });
  }
}

export default new Constants();
