export class RiotService {

    private _summonerUrl = `${process.env.REACT_APP_RIOT_API}/summoner`

    getSummonerName(id: number) {
        return fetch(`${this._summonerUrl}/id/${id}`);
    }

}