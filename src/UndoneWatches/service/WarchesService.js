class WarchesService {
    #urn = 'https://dzenjadu.github.io/data/WatchesData.json';

    async getWatches() {
        const res = await fetch(this.#urn);

        if (!res.ok) {
            throw Error('Нет доступа к бд');
        }

        return await res.json();
    }

}

export default WarchesService;