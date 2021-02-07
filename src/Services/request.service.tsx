import { WorkItem } from "../Shared/interfaces/workitem.interface";

class RequestService {
    private works: WorkItem[] = [];

    constructor() {
        import('./work.collection').then((collection) => { this.works = collection.default });
    }

    async getWork(): Promise<WorkItem[]> {
        return this.works;
    }

    async getWorkById(id: WorkItem['id']): Promise<WorkItem | undefined> {
        const result = this.works.find((item: WorkItem) => item.id === id);
        return result;
    }
};

export default new RequestService();