export class TvshowModel {
  public id: number;
  public url: string;
  public name: string;
  public type: string;
  public language: string;
  public genres: string[];
  public rating: { average: number };
  public image: {
    medium: string;
    original: string;
  };
  public genre?: string;
  public status: string;
  public network: {
    id?: number;
    name: string;
    country: {
      code: string;
      name: string;
      timezone: string;
    };
  };
  public summary: string;
  public schedule: { days: {}; time: string };
  public premiered: string;
  public weight: number;
  public webChannel: string;
  public officialSite: string;
  public runtime: number;
  public externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  public updated: number;

  public _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
}
