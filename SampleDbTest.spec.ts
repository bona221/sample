interface IZipFipSingleRecord {
  county: string;
  fips: string;
  lat: number;
  long: number;
  state: string;
  zip: string;
}

interface IZipFipResponse {
  recordset: IZipFipSingleRecord[];
}

describe(`Database SQL Test`, () => {
  it(`Log top 10 results from info_zip_fips and test the fips from first recordset`, () => {
    cy.queryStaging("select TOP 10 * from info_zip_fips").then((zipFipRes: any) => {
      const ZipFip = zipFipRes as IZipFipResponse;
      console.log(ZipFip);
      console.log(ZipFip.recordset[0].fips);
      expect(ZipFip.recordset[0].fips).to.equal("47069");
    });
  });
});
