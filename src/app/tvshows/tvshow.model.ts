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
}
