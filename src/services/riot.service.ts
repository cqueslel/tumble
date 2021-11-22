export class RiotService {

    private _summonerUrl = `${process.env.REACT_APP_RIOT_API}/summoner`

    public getSummonerName(id: number): Promise<Response> {
        return fetch(`${this._summonerUrl}/id/${id}`);
    }

}