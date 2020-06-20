export default class TeamIterator {
  constructor(team) {
    this._team = team;
    this._nextIdx = 0;
  }

  next() {
    if (this._nextIdx === this._team.length) {
      return { done: true };
    }

    const result = {
      value: this._team[this._nextIdx],
      done: false,
    };

    this._nextIdx++;

    return result;
  }
}
