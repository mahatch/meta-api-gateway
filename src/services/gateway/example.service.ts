class ExampleService {
  public constructor() {}

  public getUserDetails(userId: string): { name: string; userID: string } {
    // TODO: Implement a search in a DB.
    return {
      name: "Mahatch K",
      userID: userId,
    };
  }
}

export default ExampleService;
