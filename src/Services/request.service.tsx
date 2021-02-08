import { Message } from "../Shared/interfaces/message.interface";
import { Reply, ReplyTypes } from "../Shared/interfaces/reply.interface";
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

    async sendMessage({ from, fromEmail, subject, body }: Message): Promise<Reply> {
        //Artificially fail 3/10 messages
        const failure = Math.round(Math.random() * 10);
        if (failure <= 3) {
            throw new Error('Server error');
        }
        return Promise.resolve(
            {
                type: ReplyTypes.SUCCESS,
                message: `Thanks for your message! I'll get back to you as soon as I can!`
            }
        )
    }
};

export default new RequestService();