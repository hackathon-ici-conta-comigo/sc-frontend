import countries from './countries';
export default class CountryDataSource {
    get states() {
        return countries[0].states;
    }
}